---
title: "Automationville"
date: 2025-07-18T01:01:01Z
draft: false
---

## Automation stuff
I'm trying to automate out more of the annoying manual work that I don't like to do. Here is a list of some of the stuff that I have been doing / have done!

### One Piece spoiler crawler
This is in my "projects" section; it automates out my manual checking of the One Piece spoilers on reddit by crawling the One Piece subreddit every few minutes and extracting & emailing the spoilers from the spoiler announcement post right as it happens.

### Website CI/CD 1.0
I wanted my website to be a little bit more portable as I was moving my homelab around a bit -- I wanted to run my site on my new Mac Mini instead of my Pi -- so I decided to run it all out of a single "immutable" Docker container. Before, I also ran it out of a container, but did some manual changes inside the container post-deployment to update my site automatically when my Github updated, but that was kind of lame and not portable. Now, I have the Website Updater v2!

This method of updating my website goes like this:
1. I update my website and push the changes to Github
2. A Github action runs which builds my site with Hugo, builds a docker image out of it, and pushes it to my private repo on Docker Hub
3. A cronjob on my Mac Mini pulls the image down every few minutes, and if the pulled image is not the same as the current one, it will stop and remove the current container and run the new image.
4. The docker container exposes a port which is picked up by a Cloudflare tunnel and makes my website available to the public without me punching a hole in my router.

Voila! A New and Improved method. This was super fun to make and was very easy thanks to the massive amount of information and templates available online.

### Website CI/CD 1.1
Once upon a time, my `personal-website` repository on Github was public. I now keep it private to protect a few sensitive things that are on it. 
However, I wanted to make it public again so that those who see my blog (see: 1-2 people) and want to see the theming/css behind it (see: nobody) would be able to.

There are two ways I can do that: first, I can take the sensitive information out of the private repo. I don't really want to do that. Second, I make a public-facing repo with only my code in it.

I like that latter option. The unfortunate thing is that, when I update my private website repo, I would have to update the public one as well. Thankfully, I have a solution to that horrifying
hint of possible manual labor, which is Github Actions. My idea was as such:

1. Upon pushing to `personal-website`, pull `public-website`
2. Copy necessary code files (pre-determined) from `personal-website` into `public-website`
3. Add, commit, push
4. Profit

So, naturally, I looked online to see if anyone had done this kind of thing before. I got lucky and found [this blogpost](https://some-natalie.dev/blog/multi-repo-actions/) which had *almost* the exact same usecase, 
except that it was updating a README instead of pushing some code files. Nonetheless, essentially the same thing.

For security, I made a fine-grained Github token which had read/write access to my `public-website` repo. With that, I do the following actual steps:

1. Checkout personal site and save to `./personal-website`
1. Checkout public site and save to `./public-website`
1. Use `bash` to copy files over from personal to public
1. Add, commit, push
1. Profit

Now, whenever I make updates to my site, it pushes to this public repo too!

Below is the Action YAML file. As a reminder, nearly none of this is mine, and I only substituted in the first step as well as making some slight changes to copying the files over.

```
name: update_public_site

on:
  push:

jobs:
  update_site:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod
          path: personal-website

      - name: Checkout public repo
        uses: actions/checkout@v4
        with:
          repository: floor3d/public-website
          path: public-website
          token: ${{ secrets.WEBSITE_UPDATE }}

      - name: Copy code files from private website to public website
        shell: bash
        run: |
          cd personal-website
          ls -al
          echo "copying files"
          cp -r themes/ ../public-website/themes
          cp ./hugo.toml ../public-website/
          cp -r static/ ../public-website/static
          cp -r ./content/ ../public-website/content
          cd ..
          ls public-website/

      - name: Commit and push changes (if any)
        shell: bash
        env:
          CI_COMMIT_MESSAGE: update code files with latest
          CI_COMMIT_AUTHOR: github-actions[bot]
          CI_COMMIT_EMAIL: username@users.noreply.github.com
        run: |
          cd public-website
          git config --global user.name "${{ env.CI_COMMIT_AUTHOR }}"
          git config --global user.email "${{ env.CI_COMMIT_EMAIL }}"
          if [[ `git status --porcelain` ]]; then
            # Changes
            git add .
            git commit -m "${{ env.CI_COMMIT_MESSAGE }}"
            git push
          else
            # No changes
            echo "no changes to latest posts"
            exit 0
          fi
```
