---
title: "Projects"
date: 2024-07-31T20:43:44Z
draft: false
---

## Projects I've done
I've made many small projects without version control software. May they rest in peace. As for the others, some are public and some are private; if you are interested in one of the private ones and want to see my code, just let me know :)

## Ongoing / lost to history
### Homelab
My tiny homelab comprising of 1 raspberry pi, an 8 port 1 gb Netgear switch I bought for 5 dollars, an M4 base Mac mini with a 2TB SSD upgrade, my laptop(s), and a Proxmox machine, all connected via a tailnet. It's still in its infancy phases, but it's mine!

### DH Middleman
Diffie Hellman middleman simulation, written in Rust. Simulates a DH handshake, but with an adversary in the middle :)

### Monstrous Scylla
An informal testing suite to measure the speed of ScyllaDB based on a predetermined use case.

### CRAFT
RAFT in C!

## Finished
### FTP Client
Simple FTP client written in Python, for my Networks class. Runs on the command line, and supports the following six operations: directory listing, making directories, file deletion, directory deletion, copying files to and from the FTP server, and moving files to and from the FTP server. Uses two sockets, one for the Control channel and one for the Data channel.

### BGP Router
Simple BGP router written in Python, for my Networks class. Accomplishes all of the essential functions of a real router, i.e., accepting route announcements from simulated peer routers, generating new route announcements for  peer routers, managing and compressing a forwarding table, and forwarding data packets that arrive from simulated internet users.

### TCP Lite
Lite TCP implementation written in Python, for my Networks class. It ensures data is delivered in order, without duplicates, missing data, or errors, built over UDP.

### Importless Web Crawler
Raw Web Crawler written in Python, for my Networks class. All HTTP request and response code was written by me, and not helped via a library such as Requests, Selenium, BeautifulSoup, etc. It logs into a fake social media site and gathers data from the pages.

### RAFT Database
Distributed Key-value Database in Go, for my Networks class. A simple version of the RAFT protocol, this data store is run multiple times in parallel, 
maintaining consensus among the replicas, even through failure of nodes and other issues.

### Swing Image Editor
GUI Image editor written in Java. Can apply filters, reverse, blur, etc. 

### cLisp
U lisp language made in C. I used `buildyourownlisp(dot)com` to make this project. A cool way to learn about programming languages :)

### Grab
A trivial implementation of grep written in Rust as I learned the language.

### Secure Messenger
Secure Messenger Client and Server written in Python: Written as a final project for my Network Security class, this program incorporates SRP, Diffie Hellman, mutual authentication, etc. It guarantees integrity, endpoints hiding, protection against replay attacks and impersonation, and other attacks.

### CTF Challenges
A collection of CTF challenges of all types that I have made for my club at school :)

### Ghost in the sHELL
The Visual C *Magnum Opus*. A full-featured C2 framework and modular malware implant for Windows. I was part of a team, and I helped make functionality such as thread hijacking process injection, in-memory DLL loading, client frontend, chrome password stealer, hotkey persistence, TLS encrypted channels via certbot, string obfuscation, and more capabilities :)

### One Piece Spoiler crawler
Written in Bash and Python: an oversimplified spoiler service which crawls Reddit to carve out and email me the latest One Piece spoilers when they come out. Also tells me when the new chapter releases!

### Find D. Titlescreen
A machine learning model which scans through a One Piece episode and returns the timestamp where the titlescreen starts. Written with PyTorch and trained on my GPU at home (AMD 7900 GRE).


### Strings They ELF
Linux ARM malware written in C, targeting Linux ARM machines like Raspberry Pi's. Has general usage functionality (host awareness, process injection, peristence, file IO, etc.), a special feature (checkins over DNS over HTTPS), and special environment targeting (targets a fake backup machine and reads special messages on the filesystem via a reflective Shared Object payload and Ptrace injection). Compared to *Ghost in the sHELL*, this one was even more difficult and interesting!
