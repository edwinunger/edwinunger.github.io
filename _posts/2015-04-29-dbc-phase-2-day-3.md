---
layout: post
title:  "DBC Phase 2, Day 3"
date:   2015-04-29
categories: blog
excerpt: "Holy shit I just built Bit.ly. Well, not just. I worked on it for most of the day and finished it a while ago. The point is you can now go to https://ed-ly.herokuapp.com, type in whatever URL you want (preferably a really long one), and ed.ly will format your link to something easier to deal with. The 'herokuapp.com' part makes it a little longer than I'd like, but you'll get the idea. My favorite part is that this isn't just a shortener that works only on my site. You can use this 'edified' link and as long as the database persists, you'll be taken to the website that corresponds with the link."
---

Holy shit I just built Bit.ly. Well, not just. I worked on it for most of the day and finished it a while ago. The point is you can now go to https://ed-ly.herokuapp.com, type in whatever URL you want (preferably a really long one), and ed.ly will format your link to something easier to deal with. The 'herokuapp.com' part makes it a little longer than I'd like, but you'll get the idea. My favorite part is that this isn't just a shortener that works only on my site. You can use this 'edified' link and as long as the database persists, you'll be taken to the website that corresponds with the link.
<br>
<br>
Today, and really this whole week, has been blowing by. It feels like the more we have to learn the less time there is to learn it. We had four tasks today: build Bit.ly, create tests to verify that we created it correctly, add user authentication, and upload to Heroku. I accomplished two of those tasks, and I'm beginning to wonder if authentication and testing would have been more beneficial to my learning. My goal is to go through everything again this weekend, assuming I'm still breathing.
<br>
<br>
The morning lecture was on writing tests for Sinatra. Similar process to RSpec testing in regular Ruby apps, but a few extra lines to verify that what's being printed out to the screen is what we want to see AND the process happening behind the scenes is what we expect. I was so focused on building the app all day that I only built a few of the early tests. I know this is extremely important, so I'm hoping to find time to review it soon.
<br>
<br>
Afternoon lecture was a bit of a history lesson on the web, and some basics of what goes into a session, or cookie. During the dark ages of the internet, every website was static, or stateless, meaning it didn't know one user from another and it didn't keep track of any visitors. The cookie was created to be stored on the user's browser and interact with a web page when it was visited. If the browser had a cookie for a particular page, it could load up the information on that user, such as shopping cart, user login information, etc. This segued directly into talking about user authentication, which went somewhat over my head. my mind was still on getting my app to function, so I was glad that the lecture was being recorded so I could watch it again tonight.
<br>
<br>
Now that I have this app running correctly, I hope deployment of other apps will be much easier. During Phase 2, there are 10 solo apps we need to create and publish, so I need to get started on those ASAP. For now, I'm just happy to be building.
<br>
<br>
Until tomorrow, I'm Edwin Unger and I'm a web developer in training.