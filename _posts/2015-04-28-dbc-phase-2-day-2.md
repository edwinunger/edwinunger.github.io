---
layout: post
title:  "DBC Phase 2, Day 2"
date:   2015-04-28
categories: blog
excerpt: "Holy shit I just built Craigslist. I hesitate to say this because it invariably comes back to bite me on the ass, but I think I'm really getting the hang of Sinatra. It took most of the day, and it's definitely not a pretty app, but it does just about everything that the real Craigslist can do, and it can interact with a database to become as large as I want."
---

Holy shit I just built Craigslist. I hesitate to say this because it invariably comes back to bite me on the ass, but I think I'm really getting the hang of Sinatra. It took most of the day, and it's definitely not a pretty app, but it does just about everything that the real Craigslist can do, and it can interact with a database to become as large as I want.
<br>
<br>
Today was definitely a stretch outside my comfort zone, but in the end, it was very worth it. The morning lecture introduced us to the Model View Controller architecture of Sinatra. We already experienced it yesterday and learned about the basics two weeks ago, but today was about getting into each file and making them work for us.
<br>
<br>
Once we were set loose on the challenge, my pair and I chatted a bit on how we should tackle everything. We wanted to be able to view all posts by category, add a new post, edit or delete a post, and view a list of categories on the homepage. We played around with the database creation for a while until we were happy with what was being created and that every post was linked to a category. We deleted the database and rebuilt it a few times, but eventually moved on to creating methods to interact with the database through dynamic web pages. I'm still getting the hang of how to redirect a page after a user submits a new post, but we eventually got it all working the way we wanted. Of course, by this time, it was evening and time to go home.
<br>
<br>
Between our work on Craigslist, there was lunch and the afternoon lecture. We spent a small amount of time on Engineering Empathy, where we talked about difficult conversations. This concept is not new to me, since Apple gave me some serious training on how to approach coworkers and provide fearless feedback. It wasn't difficult to apply those ideas to today's topic, though I did my best to not get too 'Apple-y' with the way I approached others during the exercises.
<br>
<br>
The second half of the afternoon lecture was an introduction to understanding HTTP and the different parts of a URL. Mostly high level information, not much to apply directly to today's challenges. However, it was interesting to see the different ways we'll be utilizing Chrome Dev Tools in the near future.
<br>
<br>
I played around with my app when I get home, but having to recreate the database was a bit annoying. I might mess with it tomorrow to see if I can keep the whole thing persistent on Heroku. It's already uploaded, but since the database keeps disappearing, you won't get much enjoyment out of the app.
<br>
<br>
Until tomorrow, I'm Edwin Unger, and I'm a web developer in training.