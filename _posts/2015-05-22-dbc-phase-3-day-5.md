---
layout: post
title:  "DBC Phase 3, Day 5"
date:   2015-05-22
categories: blog
excerpt: "This morning's lecture was on JavaScript templating. There's plenty to talk about in this realm, and next week we'll actually be diving into some advanced JS challenges. This was just a high level overview of the available frameworks. We've already discussed Handlebars, which is definitely on the low-powered side, but there's also Angular, Backbone, Express, etc. The list goes on, and if you wait six months, there will be a whole new list."
---

Today was all about decoupled architecture. For the uninitiated, decoupled architecture means that your back-end, or database, is a separate app from your front-end, or client. Everything you create on the website gets sent to the back-end, which interacts with the database, sends the message back to the front-end, and displays the information to the user. This is a very common practice, since it allows multiple apps and services to access your database separately from your own app.

The morning lecture walked us through the basics of creating a decoupled app, which we already sort of did during Phase 2.