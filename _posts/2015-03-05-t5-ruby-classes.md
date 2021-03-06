---
layout: post
title:  "Instance Variables Are the Opiate of the Classes"
date:   2015-03-05
categories: blog
excerpt: "This week at DBC, we've delved deep into the world of Ruby Classes. For the uninitiated, Classes in Ruby are like blueprints for creating objects and methods. If you have a Class that contains a set of methods, you can run that class over and over again and get slightly different results based on the rules you provide every time you run an <em>instance</em> of that Class. If none of that makes any sense, don't worry. Today I'm here to show you what a Ruby Class would look like if we created one in the real world."
---

<h3>Technical Blog 5: Classes in Ruby</h3>
<br/>
This week at DBC, we've delved deep into the world of Ruby Classes. For the uninitiated, Classes in Ruby are like blueprints for creating objects and methods. If you have a Class that contains a set of methods, you can run that class over and over again and get slightly different results based on the rules you provide every time you run an <em>instance</em> of that Class. If none of that makes any sense, don't worry. Today I'm here to show you what a Ruby Class would look like if we created one in the real world.
<br/>
<br/>
For those of you who aren't already aware, my wife and I are expecting our second child. Like, any minute now. I have to keep my phone on me at all times in case she goes into labor while I'm not at home. Any texts or calls during the day cause my heart to start racing. The car is constantly filled with gas so we don't inadvertently run out while on the way to the hospital. Of course, this isn't our first rodeo. We already have a son who just turned 2.
<br/>
<br/>
So, I thought it would be fun and not at all inappropriate for me to turn my very pregnant wife into a Class and turn my son and soon-to-be daughter into Classes that can inherit from Mommy class. Here we go:
<br/>
<br/>
When you create a Class, you're creating an object, since almost everything in Ruby is an object. There's a whole lot that goes into rules for objects in Ruby, but in the case of Classes, all you need to know is that we can create a new Class in much the same way that we create objects like Arrays and Hashes.
<br/>
<br/>
{% highlight ruby %}
class Mommy
end
{% endhighlight %}
<br/>
That's it. You've created a Class. Right now, though, It's not a very interesting Class, and it won't have any effect on anything inside or outside of itself, but it exists and that's all that matters. When you create a Class in Ruby, it's common practice to capitalize the Class name, in this case 'Mommy'. Let's see if we can expand on what defines Mommy:
<br/>
<br/>
{% highlight ruby %}
class Mommy
  attr_accessor :first_name, :last_name, :height, :weight, :hair, :eyes, :hobbies, :tv_shows
  def initialize (first_name, last_name, height, weight, hair, eyes, hobbies, tv_shows)
    @first_name = first_name
    @last_name = last_name
    @height = height
    @weight = weight
    @hair = hair
    @eyes = eyes
    @hobbies = hobbies
    @tv_shows = tv_shows
  end
  puts "My name is #{@first_name @last_name}. My height is #{@height} and my weight is #{@weight}. My hair is #{@hair} and my eyes are #{@eyes}. Some of my favorite hobbies include #{@hobbies}. Some of the TV shows I enjoy are #{@tv_shows}."
end
{% endhighlight %}
<br/>
So what's happening here? Essentially, we've created the blueprint for *some* of the attributes that define my wife. Really, though, we've created the blueprint for attributes that could potentially define anyone. That's the beauty of Classes. Once you create the skeleton, Classes are infinitely adjustable, all depending on what you input. Every time you create a new instance of 'Mommy', she can be different in every way. Let's try it out:
<br/>
<br/>
{% highlight ruby %}
pregnant_steph = Mommy.new("Steph", "Unger", "5ft 6in", "none of your business", "short and brown", "blue", "being pregnant, chasing after my son, and being uncomfortable", "Sesame Street, Tinga Tinga Tales, and The Good Wife")
{% endhighlight %}
<br>
{% highlight ruby %}
=>My name is Steph Unger. My height is 5ft 6in and my weight is none of your business. My hair is short and brown and my eyes are blue. Some of my favorite hobbies include being pregnant, chasing after my son, and being uncomfortable. Some of the TV shows I enjoy are Sesame Street, Tinga Tinga Tales, and The Good Wife.
{% endhighlight %}
<br/>
So we've created an instance of the 'Mommy' Class called 'pregnant_steph'. In this state, she has certain attributes that make her unique, but there are also several details she shares with other instances, which we'll see here:
<br/>
<br/>
{% highlight ruby %}
non_pregnant_steph = Mommy.new("Steph", "Unger", "still 5ft 6in", "equal to my pregnant weight minus one baby", "short and brown", "blue", "not being pregnant, letting my son chase after me, and dancing", "anything but Sesame Street or Tinga Tinga Tales. I still like The Good Wife")
{% endhighlight %}
<br>
{% highlight ruby %}
=>My name is Steph Unger. My height is still 5ft 6in and my weight is equal to my pregnant weight minus one baby. My hair is short and brown and my eyes are blue. Some of my favorite hobbies include not being pregnant, letting my son chase after me, and dancing. Some of the TV shows I enjoy are anything but Sesame Street or Tinga Tinga Tales. I still like The Good Wife.
{% endhighlight %}
<br/>
As we can see, by slightly modifying the details of the instance of the 'Mommy' Class, we come up with a somewhat different (and infinitely more comfortable) instance.
<br/>
<br/>
Another great function of Classes is their ability to pass down their methods, functions, definitions, etc., to other Classes. This is called <em>inheritance</em> and it means smaller classes can have access to the powerful tools of their parent Class, also known as a <em>Super Class</em>. Let's use another real world example by turning my children into Sub-Classes of the 'Mommy' Class:
<br/>
<br/>
{% highlight ruby %}
class Baby < Mommy
end
{% endhighlight %}
<br/>
Once again, I've created an empty Class, but this time, there's something different. Since we've defined 'Baby' as being a Sub-Class of 'Mommy' using the < symbol, we now have access to all of the capabilities that 'Mommy' provides, but inside 'Baby'. If I wanted to put name, height, weight, hair, eyes, etc., inside the 'Baby' Class, I wouldn't need to define those objects again, since they already exist in 'Mommy'. Let's make 'Baby' a little more interesting:
<br/>
<br/>
{% highlight ruby %}
class Baby < Mommy
  attr_accessor :age, :favorite_bedtime_stories, :favorite_food, :highest_count
  def initialize(first_name, last_name, age, hair, eyes, hobbies, tv_shows, favorite_bedtime_stories, favorite_food, highest_count)
    @age = age
    @favorite_bedtime_stories = favorite_bedtime_stories
    @favorite_food = favorite_food
    @highest_count = highest_count
  end
  puts "My name is #{@first_name @last_name}. I am #{age} years old. My hair is #{hair} and my eyes are #{eyes}. Some of my favorite hobbies include #{@hobbies}. Some of the TV shows I enjoy are #{@tv_shows}. At night, my favorite bedtime stories are #{favorite_bedtime_stories}. My favorite food is #{favorite_food}. I can count all the way up to #{highest_count}."
end
{% endhighlight %}
<br/>
At the top of this Class creation, right underneath Baby < Mommy, you'll see something called attr_accessor. This is one way to list out what data we plan to use during the Class creation. You'll notice that even though we ask for first_name, last_name, hobbies, tv_shows, etc., in the 'initialize' method, we haven't listed these as required in the attr_accessor. This is because the 'Mommy' Class already has these items, and since 'Baby' inherits from 'Mommy', it has access to its methods as well.
<br/>
<br/>
{% highlight ruby %}
win = Baby.new("Win", "Unger", 2, "blond", "blue", "throwing objects at Mommy's face, jumping off of furniture, and playing at the playground", "Sesame Street and Tinga Tinga Tales", "Goodnight Moon, The Giving Tree, and Cat in the Hat", "peanut butter on bread", 16)
{% endhighlight %}
<br>
{% highlight ruby %}
=>My name is Win Unger. I am 2 years old. My hair is blond and my eyes are blue. Some of my favorite hobbies include throwing objects at Mommy's face, jumping off of furniture, and playing at the playground. Some of the TV shows I enjoy are Sesame Street and Tinga Tinga Tales. At night, my favorite bedtime stories are Goodnight Moon, The Giving Tree, and Cat in the Hat. My favorite food is peanut butter on bread. I can count all the way up to 16.
{% endhighlight %}
<br/>
Of course, one thing you have to be careful of when creating Class instances is to provide all of the required information. If you leave something blank, it will spit out an ArgumentError, which essentially means you didn't provide enough <em>arguments</em>, or data requirements.
<br/>
<br/>
{% highlight ruby %}
robin = Baby.new("Robin", "Unger", "0", "bald, "probably blue", "making Mommy feel sick, keeping Mommy from sleeping, and doing flips at 3am", "whatever Mommy eats")
{% endhighlight %}
<br/>
Creating the robin instance will return an error because we didn't provide enough arguments to match what is required. We have name, age, hair, eyes, and hobbies, but then we skipped the favorite books and favorite TV shows, and so we get an error. Even if we don't know the answer to the required argument, providing the proper number of arguments means the code will at least run, even if it looks incorrect.
<br/>
<br/>
So that's Classes! And that's it for this week's Tech Blog. My name is Edwin Unger, and I'm a web developer. Sort of.
