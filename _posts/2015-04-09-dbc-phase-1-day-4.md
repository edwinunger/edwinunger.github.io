---
layout: post
title:  "DBC Phase 1, Day 4"
date:   2015-04-09
categories: blog
excerpt: "Today was not an encouraging day for my ego. We only had two challenges to complete, but through the whole course of the day, we never succeeded in making them work to the point that they would reliably run with the rSpec. Here's the day:"
---

Today was not an encouraging day for my ego. We only had two challenges to complete, but through the whole course of the day, we never succeeded in making them work to the point that they would reliably run with the rSpec. Here's the day:
<br>
<br>
We started the morning with a lecture on debugging. Fairly straightforward concepts, since it really boils down to reading the error messages, printing out results on every line to see what the actual output is vs the expected output, and testing constantly.
<br>
<br>
Then it was time for Ruby Racers. We needed to build a 'racetrack' with players that moved from location to location at random intervals (based on a die roll) until one reached the end. When that happened, the player who reached the end is declared the winner. We were able to make our players move across the track, but every time a winner needed to be declared, we kept receiving an error. My goal is to rebuild the whole thing this weekend to make sure I can fully understand what's going on.
<br>
<br>
Lunch, then lecture, this one on blocks, procs, and lambdas. I've used procs on several occasions, but only when linking #map to extra methods, like #map(&:to_i) to both map and turn an array into integers. I'm hoping to see more of them in the future, but not because I want to use them (I don't), but because I want to understand them in case I ever need them in the real world.
<br>
<br>
Afternoon, Boggle challenge. Build a 4x4 board, have random letters (within a range) appear on each space on the board. Use RegExp to look for letters that chain together into given words, return true if word is found. We got as far as putting the letters on the board and began searching for basic words across, down, and diagonally, but then we decided to ask for help. Our coach suggested that we rebuild the array to not be so deeply nested, but that ended up breaking our code completely and we had to start over. I was frustrated after a long day of error messages, so I decided to go home and focus on the problem after a break. Once I got home, I figured out what needed to be done, but decided that instead of spending my time on rebuilding both programs from scratch, I should focus on understanding tomorrow's challenge, which is to build a sudoku solver. More on that tomorrow. Sleep now.
<br>
<br>
My name is Edwin Unger, and I'm a web developer in training.