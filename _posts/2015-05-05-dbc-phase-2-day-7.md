---
layout: post
title:  "DBC Phase 2, Day 7"
date:   2015-05-05
categories: blog
excerpt: "Today was a cross between soul-crushing doubt and the high that comes from getting your code to work. I started the morning worrying about how many of my solo challenges I've been able to accomplish. I want to make sure I give each one the attention it deserves, but I also want to make sure I fully understand the pairing challenges as well. I've been worrying about understanding the challenges from day to day, but I've had to realize that by focusing so much on what I don't understand, I'm not allowing myself to stay open to learning the new concepts that are constantly flying at us. I'm grasping it as best I can while there's time, but it's more important to focus on today's work than yesterday's."
---

Today was a cross between soul-crushing doubt and the high that comes from getting your code to work. I started the morning worrying about how many of my solo challenges I've been able to accomplish. I want to make sure I give each one the attention it deserves, but I also want to make sure I fully understand the pairing challenges as well. I've been worrying about understanding the challenges from day to day, but I've had to realize that by focusing so much on what I don't understand, I'm not allowing myself to stay open to learning the new concepts that are constantly flying at us. I'm grasping it as best I can while there's time, but it's more important to focus on today's work than yesterday.
<br>
<br>
Speaking of today, there was a LOT of learning. We started off with jQuery, which I really thought I would enjoy. I love interacting with objects on a website and getting instant feedback when I tell an object to change in some way. Unfortunately, we had a hell of a time getting anything to work properly. Finding an individual object was no problem, and doing something to all the objects or one of the objects was tough, but manageable. When it came time to make one call that made every object act independently, though, we were stuck. It didn't help that we were working entirely inside the DOM, so getting the syntax right took a lot of work. I ended up working on it by myself during lunch to get a better understanding of the whole interaction. By the end, everything was humming along nicely. Here's a sample of one of my favorites animations:
<br>
<br>
{% highlight javascript %}
$('img').each(function() {
  $(this).hover(function() {
    $(this).animate({ "margin-left": "-=100px", "margin-top": "-=100px" }, "slow" );
  },
  function() {
    $(this).animate({"margin-left": "0px", "margin-top": "0px" }, "slow" );
  });
});
{% endhighlight %}
<br>
When this function is called, hovering the mouse of an image will make it move up and to the left, and removing the mouse will return it. The coolest part is that I was able to make it work on individual images, instead of all the images at the same time.
<br>
<br>
After lunch, we had an Engineering Empathy session on pairing. I've been embracing pairing as much as possible, but I still want to work on making sure my pair and I are meeting our full potential. I've noticed lately that I get really intense and passionate when something is going either bad or good. Putting so much emotion into successes and failures can be exhausting, so I want to work on being more relaxed during pairing sessions, but at the same time still keep focused on completing the goals that the challenges put forth.
<br>
<br>
The afternoon lecture talked a bit about tomorrow's challenge, which is a JavaScript version of the Racer challenge we completed during Phase 1. Our teacher decided to live code the whole thing with us, just to make sure we were comfortable with everything that was happening. What would have taken me all day to complete, he managed to finish in about 5 minutes. I was frustrated, not because he's so much faster than I am, but because I wouldn't even begin to know where to start, and that's what would have held me up all day. I'm still planning to go in a different direction tomorrow with the challenge, but I at least have a good idea on where I could start.
<br>
<br>
The afternoon challenge was a revisit of Orange Tree, but the JS version. It was also a continuation of Prototypical Inheritance from yesterday, so it was good to solidify those skills. Building everything up and making it pass the tests didn't take very long. The craziness began (continued?) when the challenge then instructed us to build a working model of a tree using jQuery and display it on a website. My pair and I ended up staying for a couple extra hours to accomplish this, but we definitely struggled for a bit before everything started to click. We had HTML, CSS, and jQuery all working together to update the tree and change the counters on the page for age and number of oranges. By the time I left, I was definitely feeling woozy with all the new information, but pretty good in my grasp of it.
<br>
<br>
Tomorrow is Ajax day AND solo day AND Algorithm Night, which is quickly becoming my favorite night of the week. Until tomorrow, I'm Edwin Unger, and I'm a web developer in training.
