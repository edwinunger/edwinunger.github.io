---
layout: post
title:  "DBC Phase 2, Day 1"
date:   2015-04-27
categories: blog
excerpt: "I spent this past weekend going through the 'Singing with Sinatra' tutorial. Not much to it, really. We walked through the steps of building a basic To-Do app using Ruby, PostGres, HTML, and CSS. Getting a bit of insight was really important though, since we'll be working with Sinatra all this week and will come back to it at the end of Phase 2. The only drawback of the tutorial is that it's over four years old, so some of the gems are out of date, and I think some of the functionality was lost due to updates in Ruby. I got the general idea, though."
---

I spent this past weekend going through the 'Singing with Sinatra' tutorial. Not much to it, really. We walked through the steps of building a basic To-Do app using Ruby, PostGres, HTML, and CSS. Getting a bit of insight was really important though, since we'll be working with Sinatra all this week and will come back to it at the end of Phase 2. The only drawback of the tutorial is that it's over four years old, so some of the gems are out of date, and I think some of the functionality was lost due to updates in Ruby. I got the general idea, though.
<br>
<br>
On a fun note, I've added Google Analytics to my website, so I'll get a better idea of who's visiting particular pages. So far, it seems a lot of you are from Russia. To you I say "Добро пожаловать!"
<br>
<br>
Today was the first day of Phase 2, and just like the first day of Phase 1, a lot happened without a lot getting accomplished.
<br>
<br>
The mentors met early in the morning in order to welcome the new cohort and make them feel at home. There was meeting and greeting, an all DBC meeting, free breakfast, some lightning training where small groups taught the new cohort some refresher lessons (my group taught some RSpec basics and its importance in TDD), free lunch, and finally some actual learning.
<br>
<br>
Our lecture today was on the basics of Sinatra, and I was suddenly extremely grateful that I had done the tutorial this weekend. There were still some opportunities to learn but I at least understood the basics enough to know what was happening and why. I hope to be brave enough to share some code samples at some point this week, but for now, just know that it's very different from basic Ruby, but still very familiar.
<br>
<br>
The challenges today started off a little too basic, but it made sense because for most people, it was the first experience with Sinatra. We took a basic 'deaf Grandma' app and customized the responses a bit. That was it. Save, submit.
<br>
<br>
The second challenge took a bit more thinking and understanding, but once we figured it out, it was a thing of beauty. We imported a list of over 300K words from Apple's included dictionary into a database, then created a Ruby app that would check a given word against all of the words to see what anagrams it could find. After some time spent learning where to create the argument and being able to actually view the results on a website, we were happy with our result. However, it was very slow. Searching through each word by reorganizing the letters and comparing it to the given word takes a very long time. It was also during this time that I learned a bit about zombie servers, which are servers that haven't turned off properly when you're done running them. I'm hoping to keep them from happening in the future, but it was cool to find out why my server refused to turn on, at least.
<br>
<br>
We figured out that if we created the database with the original words along with their sorted word, all that would be needed is a quick SQL command to look for that particular string match. Once we had it built, the whole thing was lightning quick. We messed around with it for a bit longer, but then decided to call it a night.
<br>
<br>
That's it for today. Tomorrow is going to be a busy one. Until then, I'm Edwin Unger, and I'm a web developer in training.