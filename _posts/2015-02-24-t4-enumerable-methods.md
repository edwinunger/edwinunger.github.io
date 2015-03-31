---
layout: post
title:  "(Re)Cycle(Re)Cycle(Re)Cycle(Re)Cycle(Re)Cycle"
date:   2015-02-24
categories: blog
---

Technical Blog 4: Using the Cycle Enumerable in Ruby

So, last week we talked about the Ruby language and its data storage tools, Arrays and Hashes. This week, we're going to discuss one way (out of the thousands available) to interact with those Arrays.

Meet #cycle. Cycle is a fairly simple tool known as an <em>Enumerator</em>. Enumerators in Ruby provide a way to iterate through every item in an Array or Hash and act upon it, usually with some code that's meant to be used multiple times. In #cycle's case, it takes an Array or Hash and performs a block of code on it a set amount of times, all the up to infinity. No, seriously. If you don't limit the number of times for #cycle to run, you risk creating an infinite loop in your computer that will run forever until you force the program to quit manually. Take a look:

<code>
  array = ["hey girl "]<br>
  array.cycle do |phrase|<br>
  puts phrase<br>
  end<br>
</code>

This code results in the following output:

<code>
  hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl hey girl...etc... Forever.
</code>

The important thing to remember when creating this kind of code is that you want to give it a stopping point. In this case, putting <code>array.cycle(5)</code> will do the trick, stopping the cycle after it runs the block of code 5 times.

So why would one want to use #cycle? Wouldn't it be easier to use #each or run a 'while' loop? You've got so many ways to repeat through code, it seems kind of silly to use such a simple method that needs to be told explicitly when to stop when so many other options exist that will stop when they've run the code the correct amount of times.

Well, what about creating code that is <em>supposed</em> to go on forever?

<code>
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]<br>
  <br>
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]<br>
  <br>
  days.cycle do |week|<br>
  puts week<br>
  end<br>
  <br>
  months.cycle do |year|<br>
  puts year<br>
  end<br>
</code>

With a little coding magic, you could turn that basic code into a calendar.

That's it for this week's Tech Blog! I'm Edwin Unger, and I'm a web developer. Sort of.
