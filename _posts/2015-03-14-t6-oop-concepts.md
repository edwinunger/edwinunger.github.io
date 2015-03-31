---
layout: post
title:  "Ruby Eugenics"
date:   2015-03-14
categories: blog
---

Technical Blog 6: Classes, Modules, and Mixins

Last week, we talked about Classes, which are Ruby's blueprints for creating objects and methods. This week, we're taking a closer look at Classes and their very useful neighbors, Modules. When these guys get together, all kind of magic starts happening.

So, as everyone remembers, Classes let you create lots and lots of methods, or instructions, for certain objects. You can then create <em>instances</em> of these Classes, which are objects that contain all of the rules that have been applied by the Class. Using last week's example, here's a quick reminder:

<code>
  class Baby<br>
    attr_accessor :name, :age, :eyes, :hobbies<br>
    <br>
    def initialize(name, age, eyes, hobbies)<br>
      @name = name<br>
      @age = age<br>
      @eyes = eyes<br>
      @hobbies =hobbies<br>
    end<br>
    <br>
  end<br>
  <br>
  win = Baby.new("Win", 2, "blue", "playing with my pet balloon")<br>
</code>

Were I to call the variable 'win', I would get a rundown of everything that makes Win who he is. But where does he get it all? If we ask science, he gets 23 chromosomes from Mom and 23 from Dad. If we ask Ruby, we're given several options to create that image of <em>Inheritance</em>.

You'll also remember inheritance from when I talked about the Baby < Mommy option with Classes. If I've already created a 'Mommy' Class, I can also create a Sub-Class called 'Baby' that inherits all of the methods and capabilities of 'Mommy'. Here's another quick example:

<code>
  class Mommy<br>
  <br>
    def mommys_webbed_toes?<br>
      true<br>
    end<br>
    <br>
  end<br>
  <br>
  class Baby < Mommy<br>
  <br>
    def initialize<br>
      p mommys_webbed_toes?<br>
    end<br>
    <br>
  end<br>
</code>

NOW if I want create an instance of Baby, that child will have webbed toes (my wife doesn't really have webbed toes, but I think that would be awesome).

So, we understand that Classes can have parent Classes, or Super-Classes, and can also have child Classes, or Sub-Classes. Doing so means that the child Class can inherit all the good, bad, and weird stuff from the parent Class. But what about the other parent? It takes two to tango, as Shakespeare wrote (citation needed), so how do we get my genes into little Win? Can we just create another parent Class called 'Daddy' and make Baby a child Class of both 'Mommy' and 'Daddy'?

NO! You can't. Classes may have one and only one parent Class. And that's too bad. Just like in real life, Parent Classes can have tons of child Classes. Unlike real life, child Classes can only inherit from one parent Class. But there's another way. Let's talk about <em>Modules</em>.

Modules are a lot like Classes. They have the ability to store lots and lots of methods. What sets them apart from Classes is that they cannot create instances of themselves. But that's ok, because Modules are made to match up with Classes. Let's create a Module called 'Daddy' and give him some unique features

<code>
  module Daddy<br>
  <br>
    def daddys_beard<br>
      "curly and luxurious"<br>
    end<br>
    <br>
  end<br>
</code>

Looks an awful lot like a Class, doesn't it?

Now, how do we get this Module to pair up with the 'Baby' Class? We've got to <em>require</em> the file that the Module lives on. You see, the Module has to be on a separate .rb file and be pulled into the mix using the command 'require "daddy.rb"', assuming that we've named the file thus.

So, we have the Module, we have the parent Class and child Class. Let's make a baby!

<code>
  class Baby < Mommy<br>
  <br>
    require "daddy.rb"<br>
    <br>
    def initialize<br>
      p mommys_webbed_toes?<br>
      p daddys_beard<br>
    end<br>
    <br>
  end<br>
</code>

Excellent! Now we've successfully combined one parent Class with one Module and created a child Class with inheritance from both!

...But what if we want to play God? What we wanted our child Class to inherit from more than two sources? In the UK, they've just approved an option wherein a child can be born with chromosomes from three different donors, rather than the requisite two. Exciting times, but that's small potatoes compared with where we're going. What if we want to <em>Mixin</em> features and methods from multiple Modules? Let's see what that looks like:

<code>
  class Baby < Mommy<br>
  <br>
    include "grandpa_joe.rb"<br>
    include "uncle_frank.rb"<br>
    include "cousin_alice.rb"<br>
    include "grandma_jane.rb"<br>
    include "daddy.rb"<br>
    include "brother_bill.rb"<br>
    <br>
    def initialize<br>
      p joes_nose<br>
      p franks_eye_brows<br>
      p alices_ears<br>
      p janes_freckles<br>
      p daddys_beard<br>
      p mommys_webbed_toes?<br>
      p bills_gambling_habits<br>
    end<br>
    <br>
  end<br>
</code>

You'll notice that I'm using 'include "file.rb"' rather than 'require'. When you are 'mixing in', you're actually fusing the module calls inside the Class, meaning every Module method is available at any time the Class instance is created. I didn't take the time to write out the myriad methods that I'm calling, but you get the idea. By using Mixins, that is, inserting multiple methods from different Modules into the Class creation, we can access limitless amounts of data and manipulate it in any direction we choose. This act of mixing and matching from different sources is how Ruby gets around the issue of 'Multiple Inheritance', which it technically doesn't allow in the traditional sense.

To reiterate: Classes and Modules are very similar, since they both hold methods and objects. Classes are more powerful because they can create instances of themselves, which Modules cannot do. However, Classes can only inherit methods from one parent Class, but can inherit from unlimited numbers of Modules, making Modules a key ingredient when one set of Class methods isn't enough. When you insert a Module directly into the creation of a Class, you create a Mixin. You can create Mixins from multiple sources and have access to a near limitless selection of methods.

That's it for this week! My name is Edwin Unger, and I'm a web developer. Sort of.