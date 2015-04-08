---
layout: post
title:  "DBC Phase 1, Day 2"
date:   2015-04-07
categories: blog
excerpt: "Today was a heavy day for coding. We checked in with our Accountability Group for a few minutes, sort of gauging how we felt about yesterday's work. There was a lot of stress about finishing the challenges in time, so I was thankful my pair and I had completed everything last night."
---

Today was a heavy day for coding. We checked in with our Accountability Group for a few minutes, sort of gauging how we felt about yesterday's work. There was a lot of stress about finishing the challenges in time, so I was thankful my pair and I had completed everything last night.
<br>
<br>
Our morning lecture was sort of based around 'Aha!' moments and Code Smells (badly written code), so there was some sharing of what people did yesterday to solve the Roman Numerals in a much more efficient way. #DivMod came up a lot, which is a neat little method I'll be using... the next time I do Roman Numerals... Anyway, it takes a value and an argument, divides the value by the argument, and returns both the quotient AND the modulus (remainder) into one group, so you can avoid having to run several lines of code to get both of those values. I didn't mention this yesterday, but a student from one of the upper level cohorts came over and showed us how we could shorten our code to just a few lines, assuming your cipher is in hash form:
<br>
<br>
{% highlight ruby %}
  result = []
  hash.reduce("") do |result, (key, value)|
    quotient, number = number.divmod(value)
    result << key * quotient
  end
{% endhighlight %}
<br>
I haven't had a chance to check it against anything of mine, but it's certainly disgusting in its simplicity and makes my 30+ lines look like garbage. Ah well, at least mine is still readable.
<br>
<br>
We finally got into some coding and the first thing we did was... More Roman Numerals! Not really, but we did have nearly 30 different solutions for the Roman Numerals challenge from previous cohorts to go through. We created boiler plate tests to use on all of them, and I'm sad to say that many of them failed. This is mainly because the program passed the minimum requirements but didn't look at edge cases for numbers like 4, 9, 40, 90, 400, and 900, all of which require a different setup compared to the regular Roman Numeral formation. Some of the code only had some minor typos or letters missing, so where we could fix code, we did.
<br>
<br>
We also made a Pig Latin translator. We spent more time on this than I originally planned, but my partner was really interested in making the code recursive. I'm still not super comfortable with this concept, so I was all for solving it. In the end, we made it work, but it wasn't as pretty as I'd hoped. I ended up refactoring the code when I got home tonight, not because I didn't like the recursion, but because I wanted to see how simple I could make it. Here's what I wrote tonight, sans recursion:
<br>
<br>
{% highlight ruby %}
def pig_latin(string)
  final_array = []
  string_array = string.scan(/\S+/)
  string_array.each do |word|
    punctuation = []
    if word =~ /\w+[!,?.]/
      punctuation << word.slice!(-1)
    end
    if word =~ /\A[^aeiou]/
      consonants = []
      until word =~ /\A[aeiou]/
        consonants << word.slice!(0, 1)
      end
      final_array << word + consonants.join("") + "ay" + punctuation.join("")
    else
      final_array << word + "ay" + punctuation.join("")
    end
  end
  final_array.join(" ").capitalize!
end
p pig_latin("hello string, how are?")
=> "Ellohay ingstray, owhay areay?"
{% endhighlight %}
<br>
After this chunk of coding, we had 45 minutes of yoga. It was a very basic class, since it was our first day. We mostly spent our time stretching leg muscles and relaxing our bodies to allow for better breathing and posture.
<br>
<br>
Lunch was next, but I ate quickly so I could get back to coding. We only had a few minutes to finish up some last steps of the Pig Latin challenge before going into another lecture, this one on Algorithms. There was a lot to learn, but it was mostly a high level look at different algorithms and their benefits. We were able to group up and write code for both linear and binary search methods. This was excellent timing, because right after the lecture, my pair and I jumped on the Binary Search challenge and completed it very quickly using almost the same process we figured out during the lecture. Here's what we came up with:
<br>
<br>
{% highlight ruby %}
def binary_search(term, array)
  return false if array.length == 1
  middle = (array.length / 2)
  if term == array[middle]
    true
  elsif term < array[middle]
    array = array[0..middle]
    binary_search(term, array)
  elsif term > array[middle]
    array = array[middle..-1]
    binary_search(term, array)
  end
end
{% endhighlight %}
<br>
Binary Search looks up a search term inside of an array using the check, split, repeat method. Here's the rundown: If the search term equals the value of the item in the middle of the array, return true, end of code. If the search term is less than the value in the middle of the array, split the array and compare the search term to the value in the middle of the smaller array. Continue splitting until the search term is found. If the search term is greater than the middle value, split the array and compare the search term to the value in the middle of the larger array. Continue splitting until the search term is found. If the value is never found, return false. I really liked writing this code, especially since it was the first time I really felt confident using recursion, which is practically necessary in this challenge.
<br>
<br>
We also went through a Linear Search challenge, but weren't allowed to use the regular enumerables like #each or #map. Instead, we had to use for, while, and until loops. It actually took us longer to complete the Binary Search challenge than the Linear. We did finish, and here it is:
<br>
<br>
{% highlight ruby %}
def linear_search (array,number)
  index = 0
  until index == array.length - 1 || array[index] == number
    if array[index] == number
      index
    end
    index += 1
  end
  if index > array.length - 2
    nil
  else
   index
 end
end
{% endhighlight %}
<br>
This could have been a lot shorter with a regular enumerable, but it's still somewhat readable. We also had to take our Binary Search, Linear Search, and a regular enumerable search and compare their speeds using Benchmark methods in Ruby. Turns out, the Binary Search was consistently much faster than the other two, while Linear Search was the slowest. This won't always be the case, especially when you start thinking of millions upon millions of searches being run at once.
<br>
<br>
Late afternoon and it was time for another lecture, this time on dealing with the Super Ego, part of the Engineering Empathy series. We spent some time discussing how we interact with our inner monologue, whether we let it talk down to us and make us feel bad, or ignore it and open up our minds to more positive thoughts. I had a hard time letting go of my Super Ego, since it's what keeps me motivated to continue this program. It's not always the healthiest relationship, but working hard because of fear of failure is still working hard.
<br>
<br>
In the evening, my pair and I came back together for one more coding challenge, the Dictionary Sort. This was extremely easy and I started wondering what was missing. We originally solved the challenge by getting a user input value, but when I got home tonight I decided to refactor by putting in an option for one or multiple arguments when creating the dictionary. Here's tonight's final code:
<br>
<br>
{% highlight ruby %}
def dictionary_sort(*words)
  word_array = []
  words.each do |word|
    word_array << word
  end
  p "You have #{word_array.length} words in your Dictionary."
  p "Here are your words:"
  word_array.sort!
  word_array.each do |word|
    p word
  end
  word_array
end
dictionary_sort("apple", "cranberry", "banana")
=>"You have 3 words in your Dictionary."
=>"Here are your words:"
=>"apple"
=>"banana"
=>"cranberry"
{% endhighlight %}
<br>
I was very impressed with my pair and I for getting done at a decent hour. When I got home, I decided to spend the extra time rewriting the challenge solutions to make sure I could remember it. Writing here has also solidified everything.
<br>
<br>
Until tomorrow, my name is Edwin, and I'm a web developer in training.