---
layout: post
title:  "Ruby is the Robot-Ghost-From-The-Future Version of JavaScript"
date:   2015-03-21
categories: blog
---

Technical Blog 7: JavaScript

Here in week seven of Dev BootCamp, we've entered into a completely different language. After scaling the hills of Git, HTML, and CSS, crossing the mountains of Ruby, we've now come to the pit of despair known as JavaScript. I completely understand why we've been introduced to this language later in the game, since the difficulty level of using it so early on in the program would undoubtedly have led to much wailing and gnashing of teeth. You see, JavaScript is somewhat similar to Ruby in terms of syntax, since both languages are object oriented. Ruby is used in back-end development while JavaScript is used primarily in front-end (even though it's made huge leaps into back-end with Node.js), but the way they create objects is functionally similar. Here's the problem: JavaScript is older, and much much much less user friendly, than Ruby.

To be fair, Ruby has more functionality because it has more built-in methods than JavaScript, so anything you want to do needs to be created from scratch. Even then, the built-in functions of JavaScript don't work the same way they do in Ruby, so you have to build, figure out what works and what doesn't, erase, rebuild, and continue to pull your hair out as you daydream about how easy it was with Ruby. It's like being given a complete toolbox and being told to build a robot. It will take you a while, but you've got all the tools and resources you need. Then, once you've built your Ruby robot, they tell you to build another robot, but this time they take away all of your tools except a hammer. If you're like me, you'll use that hammer to beat your JavaScript robot into submission and make it behave like your Ruby robot (or at least a facsimile of it).

This week, we were given a challenge to revisit one of our Ruby puzzles from a previous unit and rebuild it using JavaScript. This challenge was the 'Commafier', which essentially takes a number of any length and inserts a comma in the appropriate spot. So, '1000' becomes '1,000', '1000000' becomes '1,000,000', and so forth. When we were told to rebuild it in JavaScript, we weren't given any requirements to match it to the Ruby version, but my pair and I decided to try it anyway. We wanted to see how similar these two languages can be when beaten with a hammer.

So, let's go line by line. for clarity's sake, I'll make the Ruby code <font color="red">red</font> and the JavaScript code <font color="green">green</font>.

<code>
  <font color = "red">def separate_comma(number)</font><br>
</code>
<br>
<code>
  <font color = "green">function separate_comma(number) {</font><br>
</code>

So far so good. Ruby has used 'def' to define a new method called 'separate_comma'. It takes one argument, 'number', which is the number we want to Commafy. JavaScript is nearly identical, using 'function' to define a new function with the same name and the same argument. Just so we can follow the story of a number, let's commafy 123456.

<code>
  <font color = "red">digits = []</font><br>
</code>
<br>
<code>
  <font color = "green">var digits = [];</font><br>
</code>

Again, nearly identical. We've created an empty array, 'digits', that will eventually hold our number data when we slice it up into individual digits. In Ruby, defining a local variable requires only the name, but providing only the name in JavaScript would actually result in a global variable that could be accessed anywhere. Not too important with this challenge, but dangerous if not caught in larger coding projects.

<code>
  <font color = "red">new_number = number.to_s.reverse!</font><br>
</code>
<br>
<code>
  <font color = "green">var newNumber = number.toString().split('').reverse();</font><br>
</code>

Now we're beginning to see the limitations of JavaScript. With Ruby, I can take an array or string and reverse its order. This is very handy when you need to deal with the last object first. We create a new variable called 'new_number' and turn our number into a string object and reverse it. We have to turn 'number' into a string because as an integer, it can't be reversed. So, now it's a stringed, reversed version of its original self. Over in the JavaScript camp, we have to do an extra step. You see, the 'reverse()' method in JavaScript doesn't work on strings, only on arrays. So, we have to add in 'split()' to take the stringed number and <em>split</em> it into individual digits inside of an array. Then we call 'reverse()' on that 'newNumber' array. So, now the Ruby 'new_number' is a string while the JavaScript 'newNumber' is an array. This is an important distinction that we'll need to remember in the next few lines of code.

It should be noted that we could also have 'split' the Ruby number into an array, but since we don't have to in order to keep the same functionality, why bother?

So, now we have the Ruby string "654321" and the JavaScript array ["6", "5", "4", "3", "2", "1"].

<code>
  <font color = "red">while new_number.length > 0</font><br>
</code>
<br>
<code>
  <font color = "green">while (newNumber.length > 0) {</font><br>
</code>

And just like that, we're back in near-identical territory. While this reversed stringed number or array has a length greater than 0...

'While' loops in both Ruby and JavaScript have similar functionality. Ruby does have the opposite of the 'while' loop, which is 'until', but for this exercise, that's not necessary. Both Ruby and JavaScript also have the 'for' loop, though Ruby often forgoes the 'for' for the 'each' iterator.

The 'length' method work on both strings and arrays in Ruby and JavaScript. It does not work on integers in either language, which is why these numbers are still in string or array form.

<code>
  <font color = "red">digits << new_number.slice!(0, 3)<br>
  end</font><br>
</code>
<br>
<code>
  <font color = "green">var spliced = newNumber.splice(0, 3).join('');<br>
  digits.push(spliced);<br>
  }</font><br>
</code>

In Ruby, a 'bang' method can take a regular method, apply an exclamation point, and turn it into a destructive method. So, normal 'slice' can take parts of an array or string and make a new object that contains those sliced parts while still keeping the original string or array completely intact. When it becomes 'slice!', it does the same thing, but also permanently removes the items from the original string or array. The bang method isn't available for all methods, but it's very useful when you want to modify your original objects. In this exercise, we take the number string and, starting at the [0] index, we grab everything until we get to the [3] index, but not including that index. This means we're taking the first three characters of the string and pushing them into the empty 'digits' array. These slices are permanent, meaning that every time we loop (while the new_number is greater than 0), we're removing 3 characters from 'new_number' and putting them into the 'digits' array. Since we're doing this 3 characters at a time, we end up with an array with numbers grouped by 3, like this ["654", "321"]. 'Slice' and 'slice!' work on strings or arrays. The '<<' is just a simpler way of saying 'append'. We could opt to use the 'push' method as well for the same result.

With JavaScript, there is no 'bang' method option. There <em>is</em> a slice method, but it is non-destructive, which means that even though the numbers are being sliced and moved to another array, the same numbers aren't being deleted from the first array. The 'while' loop would never count down to 0. Since we have to have a way for the loop to end, we need something destructive. Luckily, there's 'splice', which is identical to the 'bang' version of 'slice!'. 'Splice' cuts the characters from one array and pastes them into another. Unlike the ruby 'slice!', this method won't work on strings, which is why it's so important that it's all inside an array right now. Also important: we have 6 individual characters in this array and when we 'push' them into the empty 'digits' array 3 at a time, we want to make sure they're grouped by 3. So, we use 'join' right after we 'splice' the 3 characters. This will give us ["654", "321"], an array identical to the Ruby 'digits' array.

<code>
  <font color = "red">number = digits.join(",").reverse<br>
  end</font><br>
</code>
<br>
<code>
  <font color = "green">return digits.join(",").split('').reverse().join('');<br>
  }</font><br>
</code>

Finally, the home stretch. In Ruby, we take our 'digits' array, 'join' the different groups of 3 together and separate them by commas. So, ["654", "321"] becomes "654,321". Lastly, we 'reverse' the string so it's "123,456". That's the end for the Ruby method. Pretty straightforward.

In JavaScript, it's one more time around the park. We take the 'digits' array ["654", "321"] and 'join' it together and separate each group of 3 with a comma, so it looks like "654,321", just like Ruby. However, now we need to call 'reverse()'' on this string. If you remember from earlier, 'reverse()' won't work on strings, so we need to turn it <em>back</em> into an array with 'split('')'. Now we have ["6", "5", "4", ",", "3", "2", "1"]. Notice that the inserted comma is now one of the single characters in the array. We call 'reverse()' on the array, so now it's ["1", "2", "3", ",", "4", "5", "6"]. Lastly, we call 'join('')' one more time to turn the array into the string "123,456". The end.

In the end, these languages are not that different. Ruby has more methods and can perform those methods a lot more freely, but that doesn't mean JavaScript is without its merits. I'm still discovering what those are, and in the meantime, I choose to believe that Ruby is the robot-ghost-from-the-future version of JavaScript.

My name is Edwin Unger, and I'm a web developer. Sort of.
