---
layout: post
title:  "DBC Phase 1, Day 3"
date:   2015-04-08
categories: blog
excerpt: "Wow. Today was intense. I feel like in a week, I'll be pining for the easy days that this week is bringing, but for right now, it's been an incredibly action packed day of coding. Here we go:"
---

Wow. Today was intense. I feel like in a week, I'll be pining for the easy days that this week is bringing, but for right now, it's been an incredibly action packed day of coding. Here we go:
<br>
<br>
The day started with another lecture, this time on Data Structures. We didn't go heavily into every kind of structure out there, but mainly focused on Stacks and Queues. Stacks follow the rule of last in, first out (LIFO), which looks like this: say I have a long, thin driveway that can hold several cars, but only one behind the other, not next to each other. If I have a party, the driveway fills up. Now, if the last person to park at the end of the driveway doesn't want to leave, it means every other car is stuck until he moves. Every car has to move in reverse order from when it was parked. This is using the #push and #pop method, which can only add an item to the end of a data structure and then has the option to remove that item, but only if it's still the last item at the end of the data structure. Queue works very similarly, but with a first in, first out rule (FIFO). Using the car analogy again, think of a car wash. You can put several cars in through one end, but they can't leave through that end. They have to drive through and exit at the other end. They can't change the order inside the car wash, but have to exit in the order they entered. In a data structure, you can use #push in the same way as with a Stack, but instead of using #pop, you'll use #shift to remove the item at the front of the data structure.
<br>
<br>
After the lecture, it was coding time. There were three morning challenges, all based around working with arrays and hashes. The first had us creating basic nested arrays. I won't bore you with too many details, but essentially we were asked to create a chessboard that had an array for each row of pieces, which looked something like this:
<br>
<br>
{% highlight ruby %}
black_back_row = ["B Rook", "B Knight", "B Bishop", "B Queen", "B King", "B Bishop", "B Knight", "B Rook"]
{% endhighlight %}
<br>
We then had to take each of these rows (including blank spaced rows) and nest them inside another array. Pretty straightforward.
<br>
<br>
So straightforward, in fact, that we did it again, but this time with some athlete information:
<br>
<br>
{% highlight ruby %}
header_row = ["Number", "Name", "Position", "Points per Game"]
joe = [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]]
{% endhighlight %}
<br>
There were more rows of athletes, but you get the idea. When placed in order, all the data should look a bit like a table, using the header_row for each value's title. Once again, all arrays were inside a larger array.
<br>
<br>
Remember that table, because we're going to come back to it momentarily. The very next challenge had us diving deeper into nested arrays, but also jumping into hashes. We created a basic Tic Tac Toe, which looked like this:
<br>
<br>
{% highlight ruby %}
Tic Tac Toe
def tic_tac_toe
  board = []
  letter = ["X", "O"]
  row_1 = [letter.sample, letter.sample, letter.sample]
  row_2 = [letter.sample, letter.sample, letter.sample]
  row_3 = [letter.sample, letter.sample, letter.sample]
  board << row_1
  board << row_2
  board << row_3
  pretty_board = p board[0]
                 p board[1]
                 p board[2]
                 puts
  pretty_board
end
10.times do
  (tic_tac_toe)
end
=>[X, O, X]
  [O, X, X]
  [O, O, X]
{% endhighlight %}
<br>
Now, I purposely built my board so you could see everything that's happening, but what's happening here is each row is getting a random letter, either X or O. I'm then placing each row array inside the empty board array to complete the nested array. I called the method ten times, but am just showing you one board because you probably don't need to see ten random X and O layouts.
<br>
<br>
Going back to the table from above, we now want to create a method that turns that data into a hash. After lots of coding gymnastics that had me slicing off values from the header and inserting them into each appropriate section of the athlete arrays, I found #zip, which simplified everything. Here's how it works:
<br>
<br>
{% highlight ruby %}
def hash_converter
  header_row = ["Number", "Name", "Position", "Points per Game"]
  joe = [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]]
  buckets = [.....]
  harvey = [.....]
  sally = [.....]
  diboux = [.....]
  final = [joe, buckets, harvey, sally, diboux]
  final.map! do |name|
    Hash[header_row.zip(name)]
  end
  final
end
p hash_converter[2]
=>{"Number"=>31, "Name"=>"Harvey Kay", "Position"=>"Shooting Guard", "Points per Game"=>[0, 30, 16, 0, 25]}
{% endhighlight %}
<br>
Okay, there's a lot going on here, so let's break it down: I have my header row for titles and athlete rows which all contain similarly ordered information. the final array is all of the athlete arrays inside a nested array, sans header row. When I call #zip, I'm running it on each individual athlete row WITH the header row, and here's where the magic comes in. Like the teeth of a zipper on a jacket, the items interlock with each other. header_row[0] and joe[0] become a pair, header_row[1] and joe[1] become a pair, and so on. Each of these pairs is now its own array, so the each row now looks like this:
<br>
<br>
{% highlight ruby %}
[["Number", 12],["Name", "Joe Schmo"],["Position", "Center"], ["Points per Game", [14, 32, 7, 0, 23]]]
{% endhighlight %}
<br>
Pretty neat, huh? It gets better.
<br>
<br>
I can now take this nested, nested array and call Hash on it, as you saw above. Every arrayed pair now becomes a key-value pair inside of a hash, which is still inside of a nested array. All of that zipping and hashifying happens on
<br>
<br>
{% highlight ruby %}
Hash[header_row.zip(name)]
{% endhighlight %}
<br>
Alright, enough of that. After These three challenges, we had lunch, and then another lecture, this one on Recursion. I'm still not fully confident in it, but am comfortable enough to know it when I see it and when I need to use it.
<br>
<br>
The afternoon brought a whole range of challenges, which I'll try not to lay out fully. There was a basic Object Orientation challenge, which had us creating an orange object and a tree object to hold orange objects. We had to cause the tree to age, grow, bear fruit, and die. We also had to have options for checking if there was any fruit, and also the ability to pick fruit from the tree. Nothing too fancy, but it's still neat when it all works.
<br>
<br>
The Enumerable Methods Review challenge helped us remember some of the important enumerables that aren't #each, including #each_slice, #map, #each_with_index, #select, #find, and #reduce. Nothing too fancy, but I kept having to remind myself not to use #each. Lesson learned, I suppose.
<br>
<br>
Regular Expression review helped solidify some of the RegExp I've been working on, though I wish the challenge had been more varied. We spent more time on method calls for the RegExp rather than manipulating how the RegExp values were built. Here's an example:
<br>
<br>
{% highlight ruby %}
def grab_ssn(string)
  ssn_array = string.scan(/\d{3}-\d{2}-\d{4}/)
  if ssn_array.empty?
    nil
  else
    ssn_array.join
  end
end
{% endhighlight %}
<br>
That /\d{3}.../ junk is the RegExp, which is looking for 3 digits, followed by a dash, then 2 digits, another dash, and then 4 digits. Basically, a SSN. Trouble is, every part of this challenge had us using the same basic RegExp structure, rather than making something new. I would love to have to build RegExp all day.
<br>
<br>
The Method Chaining challenge was very basic, taking first a very stretched out method and simplifying it down to one line. The second one was a little more involved, since it wasn't immediately clear what was happening in the original code. We had to take a one line, convoluted method and stretch it out to something more readable. Once I figured out what was supposed to be happening, I ended up rebuilding it to include some variable names and blocks.
<br>
<br>
Calculating Prime Factors was pretty easy, but only for two reasons: one, I did this challenge long before starting DBC, and two, I remembered I could use 'Prime', which is a class that's been built right into Ruby.
<br>
<br>
{% highlight ruby %}
require 'prime'
def prime_factors(number)
  array = []
  1.upto(number).each do |x|
    if number % x == 0 && Prime.prime?(x)
      array << x
    end
  end
  array
end
p prime_factors(123123123)
=> [3, 41, 333667]
{% endhighlight %}
<br>
We're left with an array of prime numbers that are also factors of the given number. Notice how I had to require 'prime' at the top of this method. Without that, Ruby wouldn't know how to calculate the 'Prime.prime?' method call.
<br>
<br>
Getting into Public vs Private Interfaces, we had the fairly straightforward task of creating a bank account Class that contained personal information, but made private. If we tried to call the account number or other sensitive information, we would receive an error. I understand where to place the 'private' notice, but I'm still not 100% on which methods should go inside of it. It will vary by program, but I still want to work on getting more understanding of basic security.
<br>
<br>
In the evening, I had the chance to sit in on WhiteBoard Night, which is sort of like a game night for programmers. The recent graduates and current students get together and work on challenges that could potentially be asked during a technical interview. I didn't think I'd be advanced enough to contribute anything, but I was surprised that I was fairly comfortable with the material. Though I was too nervous to pick up the marker myself, I was able to see the answers fairly quickly, since the challenges were similar to what we're working on right now. There was a 'mode' challenge to find the word that appears the most inside a .CSV file, a challenge on finding the largest multiple of any three numbers in an array that may include negative numbers, and lastly, a RegExp challenge that had us scanning URLs for date values and then returning ones that fell into a particular date range. Given enough time, I feel confident I could have solved all of these challenges, though seeing the real world application (searching a .CSV file) immediately put me out of myself.
<br>
<br>
Until tomorrow! I'm Edwin, and I'm a web developer in training.
