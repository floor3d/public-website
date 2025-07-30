---
title: "Automationville"
date: 2025-07-18T01:01:01Z
draft: false
---

## Automation stuff
I'm trying to automate out more of the annoying manual work that I don't like to do. Here is a list of some of the stuff that I have been doing / have done!

### One Piece spoiler crawler
This is in my "projects" section; it automates out my manual checking of the One Piece spoilers on reddit by crawling the One Piece subreddit every few minutes and extracting & emailing the spoilers from the spoiler announcement post right as it happens.

### Website CI/CD
I wanted my website to be a little bit more portable as I was moving my homelab around a bit -- I wanted to run my site on my new Mac Mini instead of my Pi -- so I decided to run it all out of a single "immutable" Docker container. Before, I also ran it out of a container, but did some manual changes inside the container post-deployment to update my site automatically when my Github updated, but that was kind of lame and not portable. Now, I have the Website Updater v2!

This method of updating my website goes like this:
1. I update my website and push the changes to Github
2. A Github action runs which builds my site with Hugo, builds a docker image out of it, and pushes it to my private repo on Docker Hub
3. A cronjob on my Mac Mini pulls the image down every few minutes, and if the pulled image is not the same as the current one, it will stop and remove the current container and run the new image.
4. The docker container exposes a port which is picked up by a Cloudflare tunnel and makes my website available to the public without me punching a hole in my router.

Voila! A New and Improved method. This was super fun to make and was very easy thanks to the massive amount of information and templates available online.
