---
layout: post
title:  "DBC Phase 2, Day 6"
date:   2015-05-04
categories: blog
excerpt: "Today was a relatively easy day, compared to last week. I'm sure we'll be getting into some disgustingly confusing work over the next few days, but today we just focused on JavaScript objects and Prototypical Inheritance. For anyone not learning this stuff, it probably sounds like I made up that phrase. For anyone already in the industry, it won't be very impressive. Essentially, JS doesn't have the ability to explicitly label an object as inheriting abilities and functions from another object, so we have to create Prototype relationships, which means that an object is basically a 'version' of the existing object. it looks a little like this:"
---

Today was a relatively easy day, compared to last week. I'm sure we'll be getting into some disgustingly confusing work over the next few days, but today we just focused on JavaScript objects and Prototypical Inheritance. For anyone not learning this stuff, it probably sounds like I made up that phrase. For anyone already in the industry, it won't be very impressive. Essentially, JS doesn't have the ability to explicitly label an object as inheriting abilities and functions from another object, so we have to create Prototype relationships, which means that an object is basically a 'version' of the existing object. it looks a little like this:
<br>
<br>
{% highlight javascript %}
TodoList = function() {
  // Some code
};
TodoList.prototype = {
  // Some other code, but also inherits methods from the above function.
};
groceryList = new TodoList();
  // Now we're creating a new object, or 'instance' of the TodoList.
{% endhighlight %}
<br>
Pretty interesting, and about as close as JS can get to Ruby's Class Inheritance structure.
<br>
<br>
The morning began with a quick all student check in. Nothing exciting to report. The morning lecture introduced us back to JavaScript, paving the way for us to complete the first half of the day's challenge. My pair and I completed it pretty quickly, and I was glad to realize that I was understanding everything. Taking advantage of Chrome's Dev Tools definitely paid off.
<br>
<br>
After lunch, we had another quick lecture on how to tackle the Prototype challenge. This was basically an upgraded version of the morning's challenge, so we were able to copy most of it over. It took some extra work in order to make new objects that responded to methods from unrelated objects, but we still managed to fight through it and finish early. I spent the rest of the evening working on one of my solo challenges, which is to build a clone of a website I enjoy. I was a bit intimidated, seeing what others have created with jQuery and Bootstrap, but I decided to focus on using skills that I already have and build a little on those, rather than trying to jump into jQuery before I'm ready. I still have more work to do on the XKCD website, but I have the div blocks created and lined up properly, and the text and images inserted. Everything else will just be CSS, making it pretty.
<br>
<br>
I had the chance to spend some time with some students from Phase 1 tonight. They had questions about the OO Fruit Tree challenge. I sat with them for a bit, describing what Duck Typing is, and how they can implement it in this challenge, and also explained how the 'super' function works. I feel like I left them with more questions than answers, but I was glad to at least send them in the right direction.
<br>
<br>
I'm constantly feeling like I'm not doing enough, but at the same time don't feel like I could possibly be doing more than I already am. This Phase is definitely more of a personal journey, since some people will get through the solo challenges faster than others, and some people will spend their down time focusing more on tutorials for the coming challenges. I'm somewhere in the middle, wanting to make sure I'm ready for the new stuff but also not wanting to feel behind on the solo work. I need to hole myself up somewhere for a few days and just burn through these challenges so I can stop thinking about it.
<br>
<br>
Until tomorrow, I'm Edwin Unger, and I'm a web developer in training.