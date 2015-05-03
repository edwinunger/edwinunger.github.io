---
layout: post
title:  "DBC Phase 2, Day 5"
date:   2015-05-01
categories: blog
excerpt: "Today was kind of all over the place. I spent a bit of time with some students from Phase 1, giving them a few tips on how to best approach today's Sudoku challenge. It was really tough trying to remember everything I had learned, but it was nice to go back and think about some core Ruby concepts for a bit."
---

Today was kind of all over the place. I spent a bit of time with some students from Phase 1, giving them a few tips on how to best approach today's Sudoku challenge. It was really tough trying to remember everything I had learned, but it was nice to go back and think about some core Ruby concepts for a bit.
<br>
<br>
We had our Friday check-in, and the theme in my group tended to steer towards how fast time is flying by. I definitely feel like the days are really long, but the weeks are extremely short. Suddenly it's Friday and we're leaving Sinatra behind (for now) to get into JavaScript and JQuery next week. Crazy.
<br>
<br>
The morning lecture was pretty short, going over some basic questions that we had about the Twitter challenge. It didn't last too long, and we went right back to work. Well, most of us did. There wasn't really enough work for it to make sense to have 6 people working on it, so I picked out a few tasks I wanted to complete, one of the other students went to work on CSS, and another guy worked on a photo upload option. I made a follow and unfollow button, which took a little while and wasn't as clean as I'd hoped. I wanted there to be a follow button if you weren't following someone and an unfollow if you already were, but the time crunch made that more difficult. We uploaded what we had up to that point (including the photo upload option) to Heroku and went to lunch.
<br>
<br>
After a quick bite, I attended a breakout session with one of the students from Phase 3. He walked us through Sinatra routes and used a great metaphor that really helped me understand it better. I'm going to attempt to rewrite it here, and hopefully won't botch it up too much.
<br>
<br>
With Sinatra, your abilities involve reading information on a website and writing information to that website. The acronym CRUD comes into play here, with Create, Read, Update, and Delete. Each one of these abilities needs two steps in order to give you what you need, except Read. Imagine a waiter in a restaurant who only has two skills: bring you information (GET), and bring your information to the kitchen (POST). If you want to view a menu, or READ, then the waiter can GET that for you. If you want to CREATE a new order, first the waiter has to be told what to GET, then give you an option to send a request to the kitchen, or POST. If you decide you want to change your order, first you have to have the waiter GET the order you created and tell him specifically what you want to change. You can then POST that change request and send the waiter back to the kitchen. However, the kitchen doesn't understand an edit POST, so they need more information. You use PUT instead of POST, provide a hidden method, and can now adjust the order. Finally, if you decided you're not hungry after all, you'll need to have the waiter GET your order again, then POST a request to the kitchen to DELETE it. Again, the kitchen doesn't understand a delete POST without more information, so you need to use DELETE instead of POST in your call request and provide the hidden method to make sure the kitchen knows you want to delete the order.
<br>
<br>
Back on the Twitter project, we were now just focusing on cleanup. Make the code look a little nicer, get the CSS integrated, etc. Unfortunately, we had a catastrophe right before the 5pm presentation bell. I accepted a merge request from someone else's submission and it ended up reverting the code back to several hours earlier, and nothing was working. We scrambled for a little while, but eventually gave up and just presented what was already on Heroku. Everything worked, it just wasn't as pretty as we'd hoped it would be. I felt pretty shitty because the guy had worked really hard on making some beautiful CSS. I'm still hoping to get it all working again and uploaded, but that will have to wait for now.
<br>
<br>
Now that I've officially moved downtown, it's going to be much easier to be at DBC all day, every day. I'm planning to go in tomorrow and focus on finishing the solo challenges through #4. Sunday will hopefully be all JavaScript, since we'll be jumping into that Monday morning.
<br>
<br>
Until then, I'm Edwin Unger, and I'm a web developer in training.

