---
layout: post
title:  "DBC Phase 1, Day 6"
date:   2015-04-13
categories: blog
excerpt: "I'm probably jinxing myself, but today was pretty easy compared to last week. We managed to get through all of the challenges without too much trouble. Sure, there were issues with code not working, and we had to do a bit of research to figure out what was going on, but there was always forward momentum and it didn't take too much logic to figure out what was missing. The morning began with a lecture on rSpec, which I've been looking forward to for a while. I understand how to work with rSpec and make tests pass, but I didn't have much experience with creating my own tests. All in all, I think it's a great tool, but definitely adds more time to building a program, so I don't fully appreciate its value right now. I'm sure once we get into larger code, it will become vastly more useful."
---

I'm probably jinxing myself, but today was pretty easy compared to last week. We managed to get through all of the challenges without too much trouble. Sure, there were issues with code not working, and we had to do a bit of research to figure out what was going on, but there was always forward momentum and it didn't take too much logic to figure out what was missing.
<br>
<br>
The morning began with a lecture on rSpec, which I've been looking forward to for a while. I understand how to work with rSpec and make tests pass, but I didn't have much experience with creating my own tests. All in all, I think it's a great tool, but definitely adds more time to building a program, so I don't fully appreciate its value right now. I'm sure once we get into larger code, it will become vastly more useful.
<br>
<br>
The morning challenges were a mixed bag of 'self', enumerable methods, and Hash arguments. the 'self' challenge was pretty simple, except that I've never used it in reference to Class methods before, only Instance methods. Essentially, you can create a method inside a Class by calling 'self', so self.method_name. When you do this, you don't need to create an instance of the Class, since the method is actually being called on the Class itself. Pretty neat trick. Our enumerable challenge had us creating a new method for #map, without actually using #map. Since it creates a new array, we simply used a loop to iterate through the array and push everything to another array while yielding to a block of code.
<br>
<br>
The big challenge of the morning was Hash arguments. When you create a Class, you can as many arguments as you like in the initialization of that Class. However, if you do use arguments, they have to be in the same order every time, and not including these arguments or trying to add new ones would result in an error. This can be problematic if someone else wants to modify your code down the road. They may want to change the order of the arguments or create new ones. By keeping these arguments locked up, the code becomes static and less useful.
<br>
<br>
{% highlight ruby %}
class Person
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end
end
bob = Person.new("Bob", 36, "male")
{% endhighlight %}
<br>
By using Hash arguments, you can actually call any number of arguments (or none!) and in any order you like without issue. Here's what it looks like:
<br>
<br>
{% highlight ruby %}
class Person
  def initialize(arguments = {})
    @name = arguments.fetch(:name)
    @age = arguments.fetch(:age)
    @gender = arguments.fetch(:gender)
  end
end
bob = Person.new(:name => "Bob", :age => 36, :gender => "male")
{% endhighlight %}
<br>
When we create the instance of the Class, we also create a hash that includes the key value pairs of all the necessary information, and since hashes don't have an order, I can call the arguments in any order I choose. Notice how the hash also has the name of data, such as :name and :age. This is an added bonus that lets future users of my code know explicitly what information is being called for.
<br>
<br>
The afternoon brought another lecture, this one on some Advanced Ruby methods. I'm not sure how much I got out of it, though. My teacher let us know that some of the concepts we were asking about could easily be Googled. This is true, but then I wonder why even have this sort of lecture in the first place. On top of that, some of the questions we had were sort of waved away with 'You'll never use that in the professional world, so don't worry too much about understanding it.' Somewhat anticlimactic for a learning environment.
<br>
<br>
The afternoon challenges were all about Class and Module inheritance. I've worked with it before, but we went into overdrive with these challenges. Starting small, we had a Dog Class and Cat Class that had unique methods but also some shared methods under the Pet Class, of which both were subClasses. We also worked on an Animal Class that had subClasses for mammal and amphibian and even further subClasses for specific animals under those Classes.
<br>
<br>
The major challenge of the day was revisiting our Orange Tree Class from last week. This time, though, we had to create a parent Class for Fruit Tree, with subClasses of Apple and Pear trees. We ended up cramming all of our methods into the Fruit Tree class with only a few minor changes specifically available to the individual Orange, Apple, and Pear tree Classes. It was a lot of fun moving methods around and deleting them as I realized I could combine and simplify them with methods from other Classes.
<br>
<br>
Overall, any day that I can finish all of the challenges (regardless of how long it takes) is a good day. Until tomorrow, I'm Edwin Unger, and I'm a web developer in training.

