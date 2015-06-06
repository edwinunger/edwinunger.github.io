---
layout: post
title:  "DBC Phase 3, Day 5"
date:   2015-05-22
categories: blog
excerpt: "Today was all about decoupled architecture. For the uninitiated, decoupled architecture means that your back-end, or database, is a separate app from your front-end, or client. Everything you create on the website gets sent to the back-end, which interacts with the database, sends the message back to the front-end, and displays the information to the user. This is a very common practice, since it allows multiple apps and services to access your database separately from your own app."
---

Today was all about decoupled architecture. For the uninitiated, decoupled architecture means that your back-end, or database, is a separate app from your front-end, or client. Everything you create on the website gets sent to the back-end, which interacts with the database, sends the message back to the front-end, and displays the information to the user. This is a very common practice, since it allows multiple apps and services to access your database separately from your own app.
<br>
<br>
The morning lecture walked us through the basics of creating a decoupled app, which we already sort of did during Phase 2. It was a good reminder though, especially because I'd like for my final project to be fully decoupled.
<br>
<br>
My pair for the day is probably the strongest programmer on our team, and I'd heard good things from other people about his pairing skills. We chatted for a few minutes about how we wanted to tackle the challenge, and decided that I would drive while he navigated, even though he admitted that he wasn't really sure how to complete everything in the challenge.
<br>
<br>
We first made a near-identical copy of my app-in-progress, but this time using the 'Rails-API new' instead of 'Rails new'. This is a slightly different version of the Rails skeleton made strictly for the back-end, so it lacks any user-facing web pages, JavaScript, etc. We copied a lot of information over from the original app, but any objects that were created were output into JSON format, making it easier to grab the data from the front-end.
<br>
<br>
Lunch, then afternoon lecture on UNIX and Modularity. This was more fun than educational because we spent a lot of time learning about Bash scripting and customizing our CLI. Then, it was back to the challenge.
<br>
<br>
Once we had all the routes and objects that we needed, we took the original app and started modifying it to pull from the back-end database instead of its own. We only got through adding, editing, and deleting objects before running out of time, but I had a good understanding of what was happening to continue working on it over the weekend. Essentially, you create a method that pulls in data from a particular route on the back-end, then call that method for each object you want to create or modify.
<br>
<br>
Weekend plans include finishing my decoupled app for Monday presentation, working on my Thunder Talk, and finding a bit of time to study for the Assessment.
<br>
<br>
Until Monday, I'm Edwin Unger and I'm a web developer in training.