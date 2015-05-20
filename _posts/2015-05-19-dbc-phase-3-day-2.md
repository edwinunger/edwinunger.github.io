---
layout: post
title:  "DBC Phase 3, Day 2"
date:   2015-05-19
categories: blog
excerpt: "Rails is awesome!... Is something I would say if I understood everything that Rails is doing at any given moment. I do love how intuitive it is, but being so used to Sinatra, it's still frustrating the way Rails is so rigid, while still providing for every possible need the developer might need."
---

Rails is awesome!... Is something I would say if I understood everything that Rails is doing at any given moment. I do love how intuitive it is, but being so used to Sinatra, it's still frustrating the way Rails is so rigid, while still providing for every possible need the developer might need.
<br>
<br>
Today began with a lecture on testing in Rails. It's very similar to testing in Ruby, but we have more powerful tools at our disposal, such as Capybara and Selenium. These gems have the ability to emulate a user who might visit our site. After we instruct it on where to go and what to do, it physically opens the browser, clicks on the appropriate link, types in the box, submits, and closes the browser. If it can successfully do all of these, the tests come back green. This is a great tool because you can see immediately when something isn't working properly. It's a frustrating tool because it can only behave like a human user, so it doesn't have the ability to find a particular form by class name, since a user wouldn't see that. It CAN do that, but it takes some extra keyword instructions. Instead, it looks for words or titles near the form and latches on that way. Still pretty neat.
<br>
<br>
We got right back into the Stack OverFlow challenge, working through the releases one by one. Part one was finished yesterday, so we have question objects and answer objects that are linked to a particular question, the ability to see all questions on the homepage, and then click on a question to see all answers associated with that question.
<br>
<br>
Part two had us working with 'form_for', a very powerful Rails tool for making forms. Rather than using the standard HTML form, we can use 'form_for' to create forms specifically based on the information we want to gather. There's more to it than that, but much much simpler and more straightforward to create. We used these forms to create new questions, provide new answers, edit and delete questions, etc.
<br>
<br>
Part three was all about voting. We had to create a new migration file that would add a column to our question and answer tables, then create methods that would add or subtract from the vote total whenever someone clicked on the upvote or downvote button. It took us a little while because we wanted all functionality to be in the Model, rather than inside the Controller.
<br>
<br>
Part four was a simple API call to GitHub. We needed to place a random quote generator on the homepage so a user could see a new quote every time they refresh. We finally got it working before leaving last night, but it was frustrating because we couldn't make it work from inside the Model. We may go back and refactor to something a little cleaner, but for now, it works.
<br>
<br>
We're on Part five now, which is add AJAX to our app. Clicking on upvotes and downvotes and adding new questions and answers should change the page dynamically without the page actually reloading. I was a little worried about this section, since it's my weakest skill, but after lots of research last night and a few tutorial videos, I'm excited to see what we can do today. Turns out, there's something called UJS, or Unobtrusive JavaScript, built right into Rails. Rather than having to make a huge AJAX call to interact with the data on the page, you simply place a ':remote => true' in your form and it will immediately save the data from the form for you to do with what you want. I really hope we'll be using this method for dealing with AJAX, because I feel like I actually understand what's going on. We'll see tomorrow.
<br>
<br>
Until then, I'm Edwin Unger, and I'm a web developer in training.

