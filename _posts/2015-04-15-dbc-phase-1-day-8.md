---
layout: post
title:  "DBC Phase 1, Day 8"
date:   2015-04-15
categories: blog
excerpt: "I feel like I'm going to be saying this just about every day from here on out, but today once again had a steep learning curve. The upshot is, if it's difficult, I'm actually learning something worthwhile. When I'm comfortable and not struggling, then I'm not being challenged enough. The downside is that there are some who are barely breaking a sweat on some of these challenges. I know I'm not supposed to compare, but damn it's frustrating to not feel like I'm at the same level of understanding."
---

I feel like I'm going to be saying this just about every day from here on out, but today once again had a steep learning curve. The upshot is, if it's difficult, I'm actually learning something worthwhile. When I'm comfortable and not struggling, then I'm not being challenged enough. The downside is that there are some who are barely breaking a sweat on some of these challenges. I know I'm not supposed to compare, but damn it's frustrating to not feel like I'm at the same level of understanding.
<br>
<br>
The morning lecture was on MVC. We didn't get into the real world application of it, but talked about some high level stuff. I'll explain a bit more about it down below, since it will make more sense inside the actual challenge.
<br>
<br>
The first challenge of the morning was actually pretty simple. We got into ARGV, which in Ruby allows us to call programs and arguments directly from the command line. So, instead of running file 'pig_latin.rb' and having the tests already pre-built inside of the file, in the terminal we type 'pig_latin.rb Hello how are you' and it immediately returns the Pig Latin version onto the command line. Pretty neat trick. I even went so far as to ask the user for another string, or type exit to end the program. Of course, we were immediately told ARGV isn't used in real world applications, but it was still fun to play with.
<br>
<br>
Our second challenge pretty much held my attention for the rest of the day. We were told to make a To-Do list. Not too challenging really, since I knew I could model it with methods for CRUD (create, read, update, delete), so actually building the program didn't take that long. By the end of the first build, I could add a new task to my list, check off items, delete them, edit them, and read off my entire list. I even went so far as to create a hash for my list so that instead of having to know the location of the details in an array, I could use the hash key word for, let's say, shoes, and it would return the details on the shoes I needed to buy.
<br>
<br>
Lunch, then back to it. This is where the hills got steep really quickly. I needed to use a CSV file to import list items, organize them, add additional items, and then export them back to the CSV file. It took me a good chunk of time to actually get the lines to import correctly, and I really think it's because I really wanted to use a hash instead of an array. In the end, I was able to dig down into each argument and pull out just the details for what I wanted, and importing looked good.
<br>
<br>
Our afternoon lecture was on some basic refactoring using MVC structure. MVC stands for Model View Controller, which are the three major parts of the ideal layout of a program. The View is what the user sees, so essentially what's printed out onto the screen. User input is also here, so any method that either shows what's going on or asks for information would go in this Class. Controller is the 'sender'. It doesn't do too much coding itself, but it takes input commands from the View and sends the request to the Model. The Model is what interacts with the data structure and with other Classes. Once it finds what it wants, it pulls it over to Controller, which rearranges it into something more presentable, then sends it on to View for the user to see.
<br>
<br>
Going back to the challenge, I could successfully import data from the CSV file, but exporting correctly unfortunately took me the rest of the day. I wanted to just export the whole list back into the CSV file, sans any sort of formatting, just to see if it would work. I kept getting errors about converting, and something about line 1635 or some crap. I realized eventually that the line errors weren't from my file, but from the CSV Class files buried somewhere in my Ruby folder. I chatted with a few people about how to properly parse hash data back into a file, but it wasn't until late evening that I was able to snag a coach and just sit for a while and go line by line through the errors and get some explanation for why one thing or other didn't work.
<br>
<br>
In between my mounting stress and frustration with exporting, I attended Algorithm Night, this one focusing on Stacks and Queues. Very exciting, since we just covered this last week. I really enjoyed the challenges, and even though I couldn't figure out my own without help, I managed to see the answers for my partners' challenges pretty quickly.
<br>
<br>
Aaaaand back to the CSV/ARGV/MVC challenge. Once I could successfully export and import my data from the CSV file in a meaningful way, I started looking at ways I could make it more ARGV friendly. I originally built a lot of my methods to include user input, so there isn't too much to change. I took my code home and decided to spend the rest of the evening studying code from my classmates, reading about MVC, and getting a better understanding of CSV interaction. I'm definitely looking forward to really customizing everything this weekend, but I was definitely better served by studying MVC more than anything. I really want to have more practice with this, so hopefully I'll get that tomorrow or this weekend.
<br>
<br>
Until then, I'm Edwin Unger, and I'm a very stressed out web developer in training.