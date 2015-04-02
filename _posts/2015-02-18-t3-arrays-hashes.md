---
layout: post
title:  "To Array Is Human. To Hash, Divine."
date:   2015-02-18
categories: blog
---

<h3>Technical Blog 3: Arrays & Hashes in Ruby</h3>
<br/>
Welcome back to another edition of: Learning From Novices! The blog where I learn something new and exciting and then attempt to teach it to you based on my limited experience! Today's topic: Arrays & Hashes in Ruby. If all of those words sounds confusing to you, don't worry, you'll be more confused by the end. Let's get started, shall we?
<br/>
<br/>
<strong>Ruby</strong><br>
First off, a quick intro to Ruby. Ruby is a programming language used to create very powerful and sophisticated web applications. If you've ever been to Twitter's website, or Evernote's, or (for you programmers out there) GitHub, you've interacted with Ruby websites! To be fair, these websites use a platform called <em>Rails</em> to interact with Ruby, which allows them to become even more powerful, but they're all built in the language of Ruby. That's about all you need to know about Ruby for this exercise.
<br/>
<br/>
<strong>Arrays</strong><br>
So, inside Ruby, there are two main ways to save information. The first (and easiest to understand) is the <em>Array</em>. Here's the gist: you have some data, let's call it the types of cereal you have in your house. In order to keep these things grouped together and accessible inside Ruby, you'll want to create an array and place those items inside of it. You do so like this:
<br/>
<br/>
<code>cereal = ["Count Chocula", "Cap'n Crunch", "Frosted Flakes", "Cheerios" ]</code>
<br/>
<br/>
So now, all of your cereal is neatly organized inside an array. We also had to give the array a nickname, better known as a <em>variable</em> called 'cereal' so that we could pull up the list easily. So, now that we have the array, what do we do with it? Well, we can use the array in a program, for example if I wanted to make sure I eat a different cereal every day, I could tell Ruby to make a random choice every time I run the program. There are millions of ways to utilize this data, but what if I wanted to just pull one item, say 'Frosted Flakes', from the array and do something with it? I can do this with something called <em>indexing</em>. Whenever I put an item in an array, it's assigned a number based on its position in the array. The first item is always '0' (because computers), and then '1' is next, up through the end of the array. This means that we can always call a specific item in the array using its index number. Here's what it would look like if I wanted to call 'Frosted Flakes' from the array:
<br/>
<br/>
<code>cereal[2]</code>
<br/>
<br/>
That's it. nothing else to it. Ruby knows that at that position in that particular array, the item I want is ready and waiting to be called. Of course, there are ways to rearrange the items, and it's sometimes necessary to add or remove items in the array, but in general, Arrays stay organized.
<br/>
<br/>
<strong>Hashes</strong><br>
<em>Hashes</em>, on the other hand, are a little more free-wheeling. They follow a similar pattern to arrays in terms of creation, but instead of having an organized numerical ordering system, each piece of information is paired with a key, which when called, can access that bit of information, known as a <em>value</em>. For this example, Let's look at my apartment. I'm in the middle of packing, so there are a lot of boxes. I'm going to create a hash that keeps track of what items are in what types of boxes:
<br/>
<br/>
<code>boxes = {"living_room" => "books", "dining" => "plates", "bedroom" => "clothes"}</code>
<br/>
<br/>
And if I need to be reminded what's in a particular box, I can call the key for that box, like this:
<br/>
<br/>
<code = "Ruby">boxes["dining"]</code>
<br/>
<br/>
Again, easiest thing in the world. And again, you have the option of adding to or removing from the hash. You can also reassign what each key points to.
<br/>
<br/>
So what's the difference? I like to look at it like this: Imagine you're going to a concert. You want to go to a classical opera. There will be assigned seats, you'll have to get there at a certain time, and it's rare that you're able to change your seat during the performance, though it is possible. That's what Arrays are. Now, instead, imagine going to a rock concert. Tickets are for general admission, there will be a mosh pit, and good luck finding a seat, let alone one that you'd ever be assigned to. This is what Hashes are. In the end, I think it's best to leave it to personal preference. I like Arrays, but only because I've worked with them more. Hashes might have their benefits, but being able to distinguish those will have to come with time.
<br/>
<br/>
Whew. There's a lot of information up there. Hope you're still with me. I'm Edwin Unger, and I'm a web developer. Sort of.
