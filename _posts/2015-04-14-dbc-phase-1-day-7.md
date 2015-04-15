---
layout: post
title:  "DBC Phase 1, Day 7"
date:   2015-04-14
categories: blog
excerpt: "I'm probably jinxing myself, but today was pretty easy compared to last week. We managed to get through all of the challenges without too much trouble. Sure, there were issues with code not working, and we had to do a bit of research to figure out what was going on, but there was always forward momentum and it didn't take too much logic to figure out what was missing. The morning began with a lecture on rSpec, which I've been looking forward to for a while. I understand how to work with rSpec and make tests pass, but I didn't have much experience with creating my own tests. All in all, I think it's a great tool, but definitely adds more time to building a program, so I don't fully appreciate its value right now. I'm sure once we get into larger code, it will become vastly more useful."
---

Today, there were a lot of concepts that went over my head for a good chunk of the day. It wasn't until I got home and could study on my own that I was actually able to digest everything to the point that I could reproduce it. Even now, as I sit here writing, it's a huge help for me to actually create code examples and have to explain them.
<br>
<br>
The day started with a lecture on how to approach Object Oriented Programming. We were reminded of a lot of the big idea rules from POODR, namely single responsibility and object ignorance. If you have a method that does more than one thing (namely, you have to use 'and' or 'or' when describing what it does), you should be able to split it into two methods. This works for every kind of object, so Classes can also be split into multiple, single function groups as well. Object ignorance is just my word for making sure that each object only knows what it can do. It waits for a message from another object, does what it's supposed to do, and sends the message on to the next step.
<br>
<br>
We only had three challenges today, which gives you an idea about how involved they were. The first two had a similar structure, but we built off of the first one inside the second one. We were instructed to create an Oven Class that has the ability to set temperature and bake items. We realized pretty quickly that if we were going to follow the rules of good Ruby design, we shouldn't give any more power to Oven than that. So, if we put objects into the Oven and the Oven knew more than it should, it takes away functionality and doesn't separate responsibilities correctly. We also created a Cookie Class that knew most of the information. It knew its ideal baking time, the bake levels from raw to over-done, etc. We also had subClasses of Cookie for cookie type, with each also having their own rules to follow like circumference, batch size, etc. This challenge wasn't too tough, since it was very similar to yesterday's challenges of proper inheritance structure and 'super' inheritance for sharing method responsibilities. The biggest takeaway was making sure each object only knew specifically what its capabilities were and nothing more. Once we had that, the challenge took care of itself.
<br>
<br>
The second challenge, however, took the entire rest of the day. Discarding our Oven, we needed to take the Cookie Class and its subClasses and put them into a factory. I'd read about this in POODR, but had no idea how to implement one. My pair and I spent a good chunk of time looking for the best way to create one. Essentially, a factory is an object creator. It can be a Class or Module, but inside of it are instructions for calling on another object to be built. so it might look something like this:
<br>
<br>
{% highlight ruby %}
class SugarCookie
  attr_reader :bake_time
  def initialize
    @bake_time = bake_time
  end
end
{% endhighlight %}
<br>
{% highlight ruby %}
class CookieFactory
  def self.create(cookie_type)
    tray = []
    tray << cookie_type
  end
end
sugar = CookieFactory.new(SugarCookie.new)
{% endhighlight %}
<br>
Now, instead of needing to create an instance of SugarCookie every time, I can call CookieFactory and get a cookie. You might be thinking that this is just an extra step to get the same result. My example is just a simple one, but we were also instructed to parse information from a text file with a list of cookies on it. So if it said 'peanut butter' or 'chocolate chip', we had to convert the string into meaningful variables that could then be translated into a cookie type. The idea of the factory is that I can feed in a list at one end and get cookie objects that match that list at the other end.
<br>
<br>
We ran into trouble in several different places. First, we had a separate file for our CookieFactory. That wasn't a huge issue, it just made seeing and understanding what was happening a little more difficult. We also wrapped our entire Cookie Class in a module. This was based on the examples we saw online, and even though it sort of worked, it made it more difficult to call the Cookie Class without having to say ModuleName::Cookie.new instead of just Cookie.new. Towards the end of the day, after getting help from more than one coach, we simplified by getting rid of the multiple files idea and removed the module wrapper. We were still getting the same results, and it wasn't until we decided to completely remove the instance variables that were present in the initialize method that we realized what we'd done wrong. Since we were initializing a Class inside of another Class, we should not have been using any extra variables that described the Cookie Class, only variables that described the Factory Class. Since we had a mix of both, we were only getting the last line of the method every time we created an instance. Once we removed everything except the 'create' method, everything worked like a charm.
<br>
<br>
I'm telling all of this a bit out of order, since during all of this, we had lunch, a lecture on Object inheritance, and then an Engineering Empathy session on feelings. The two big activities here were: sit with your partner, holding his or her hands, look into the other's eyes, and talk about anything that you're feeling that day. This was pretty comfortable for me, though some folks reported feeling a little awkward about touching others. The second part focused mainly on 'lowering the water line', essentially our ability to feel like we're in a safe enough environment to share some information about ourselves that we wouldn't share with just anyone on the street. Again, this was not an issue for me, since my life is an open book. I think the only reason I don't share without being asked is because I worry about over-sharing. If someone gives me their life story without being solicited for it, I begin to wonder if that person isn't just doing it for the attention. I never want others to feel that way about me, so I tend not to share unless it's absolutely relevant.
<br>
<br>
Again, all of this was happening in between our attempts at solving the CookieFactory challenge. Once we finally had it working properly, we realized there was another step: Composition. We needed to rebuild our CookieFactory and Cookie classes so that they could accept ingredients and make cookies based on those ingredients. The idea is that by creating a Cookie WITH the peanut butter ingredient instead of a creating a PeanutButter cookie, we could sidestep the need for inheritance at all. If everything is a Cookie, but only slightly different based on the ingredients included, then all CookieFactory needs to know is what kind of ingredients, and how to include those ingredients. Enter the Ingredients Class! At this point, though, it was late in the evening and it was decided that we would attempt to get more done at home.
<br>
<br>
There was still another challenge to attempt, this one asking us to model a hospital interface, complete with a Hospital Class, Patient Class, Doctors, Nurses, Technicians, Janitors, everything. That, combined with trying to rebuild the CookieFactory, made my brain melt a little. I decided that sleep is the better part of valor, and that it wouldn't help me to learn everything tonight if my tired brain couldn't remember it tomorrow.
<br>
<br>
Until then, I'm Edwin Unger, and I'm a web developer in training.