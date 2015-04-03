---
layout: post
title:  "The Joy of Coding"
date:   2015-01-25
categories: blog
---

I wouldn't necessarily call it joy. Yet. It's more of a feeling of accomplishment when I do the work and actually begin to gain a modicum of understanding. As for the opposite feeling when I'm not coding, I can definitely name the emotion as shame. Shame when I'm not doing the work I should be, shame when I choose to watch a TV show instead of pushing through a particularly tough bit of learning. I guess that's kind of good, right? I feel bad when I'm not coding. I don't feel an obligation to keep working, but I definitely feel the urge to return to it as soon as possible. Balance is the watch word, I think.
<br/>
<br/>
This week turned out differently than I had originally planned, and I couldn't be happier. I was planning to spend the week reviewing Ruby by re-reading Why's <em>(Poignant) Guide to Ruby</em>, but after going through the first few chapters, I realized I was spending most of my time looking for new information and skipping over everything that I already felt confident about. That's not to say there weren't a few gems to pick up (heh, get it? gems. Ruby humor.), but they were few and far between, and I felt like I was wasting my time.
<br/>
<br/>
Instead, I decided to jump right into Hartl's <em>Ruby on Rails Tutorial</em>, and all I can say is <em>wow</em>. I managed to get through the first two chapters, but I feel like that was more of a warm-up for the main event. You see, chapter one introduces you to creating a basic app. Not even an app, really. More of a proof of concept that a page will properly load some words if you put them in the right place. The point is, I made it through this chapter, created my little Hello_app, and moved on to chapter 2. Not too different from chapter 1, but we at least went into more detail on what was going on in the background with the creation of all of the Rails folders. I walked through the steps of creating a <em>scaffold</em>, which is fancy speak for saying I let Rails create the app for me while I just added a few tweaks. Basically Easy Mode. Regardless of how it was made, Toy_app is now live in my Heroku account, and I'm quite happy with it. However, as written above, these chapters were only warm-ups. Chapters 3-12 will go through creating a third app, but will get down to the nitty gritty of what really goes into building an app from the ground up. I'm intending to spend the next week going through as much of it as I can.
<br/>
<br/>
While working on Hartl's book, I also jumped into <em>Conquering the Command Line</em>, a decent guide to understanding the most important aspects of using the Terminal. I'm only through chapter 1, but we've already jumped into Ack/Ag installation for searching through large amounts of code very quickly. I'm also peeking at <em>Pro Git</em>, which will hopefully be the preeminent guide on the subject. I've actually enjoyed Hartl's book for that reason as well - I'm getting exposure to Git from a different direction. He doesn't like GitHub for hosting code, so I'm learning BitBucket and Heroku committing at the same time, which is giving me more confidence in Git on the command line.
<br/>
<br/>
This is a bit non-sequitur, but check this out: When you write Ruby code, you can write most of it on one line using brackets {}, like so -
<br/>
<br/>
{% highlight ruby %}
  array.each { |word| word.reverse }
{% endhighlight %}
<br/>
<br/>
My issue with this is that even though it looks simple and clean, it's not as readable as it could be, which is the entire goal of Ruby. Luckily, you can replace the brackets {} with <em>do</em> and <em>end</em>, like so -
<br/>
<br/>
{% highlight ruby %}
  array.each do |word|<br>
    word.reverse<br>
  end<br>
{% endhighlight %}
<br/>
There may be some who disagree with me, but I much prefer seeing the code written this way, simply for the fact that it looks more like a regular sentence. I'm going to call myself a do-end-er instead of a bracket-er.
<br/>
<br/>
On a personal note, I really need to come up with some apps that I want to build. I keep trying to think of services or websites that should exist, but when I check to see if anyone else has had the same idea, someone usually has. My goal for the next several weeks is to think about the people in my life and try to imagine an app that would make their lives better or more meaningful. My mind draws a blank right now, but you can trust that my notebook is full of silly half-sentences that I jot down in the middle of the night when I'm somewhere between awake and asleep.
<br/>
<br/>
One week until DBC begins. Holy shit holy shit holy shit. I'm not a developer, but I'm going to be.