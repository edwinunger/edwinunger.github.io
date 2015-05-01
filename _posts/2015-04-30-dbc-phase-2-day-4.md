---
layout: post
title:  "DBC Phase 2, Day 4"
date:   2015-04-30
categories: blog
excerpt: "Holy shit I just built Twitter. To be fair, I definitely didn't do it alone, and we still need to flesh out the CSS so it looks more presentable. But we've worked out the functionality to where a user can login, create a post, view their previous posts, make profile changes, view their followers, and view tweets from people they follow. Those last two bits were the features that my pair and I were responsible for, and they took us the entire day to create."
---

Holy shit I just built Twitter. To be fair, I definitely didn't do it alone, and we still need to flesh out the CSS so it looks more presentable. But we've worked out the functionality to where a user can login, create a post, view their previous posts, make profile changes, view their followers, and view tweets from people they follow. Those last two bits were the features that my pair and I were responsible for, and they took us the entire day to create.
<br>
<br>
When you think about creating a user, it's not a complicated process. A user should have a user name, an email, their actual name, and a password. A tweet is even simpler, needing only the content of the tweet and an id that links the tweet to a specific user. If Twitter only had this functionality, our work would have been done pretty quickly. The confusing part comes when you try to create followers. An individual user can follow others and also be followed themselves. You have to create a relationship wherein a user can have many followers through a relationship with other users, and the same connection through other users that the user is following. It took us quite a while to figure out the functionality. Once we had it, we were able to get all the information we needed regarding those relationships.
<br>
<br>
The morning lecture was on Agile Development, a concept that makes a lot of obvious sense. When working on a project, you team shouldn't have a 'trickle down' effect where they can't work on their portion of a project until the previous team is done. This creates major headaches when something goes wrong and the work has to back up a few steps. Agile Development says that everyone is working on their own portions of a particular project, and then they come together in order to form the final product. 'Vertical Slicing' is the act of taking small pieces of every level of development into one product feature. One team might work on the creation, testing, and deployment of a user authentication tool on a particular app. another team might make and deploy the ability to update the profile picture, etc. It's a really simple concept that seems like an obvious choice, but it's a fairly new concept. The tech world is very different from most fields, where having a trickle down method would actually make more sense. In a car factory, you don't want to put wheels on before you've had the chance to install the axles.
<br>
<br>
The afternoon lecture was more of a Q&A, giving us the opportunity to discuss blank spots in our learning. We'd already covered user authentication yesterday, so there was no point in me asking about it. I was still happy to get more information on partials, which is a sort of catch-all in Sinatra that allows a user to put repeated methods inside a file to be called later. The whole point is to make the code more efficient. I haven't been brave enough to try it out yet, but I'm sure one of my future apps will feature lots of overused code and I look forward to taking advantage of partials.
<br>
<br>
In my free time tonight, I completed the first challenge in our 10 required solo challenges. It was a basic ToDo app, so it wasn't difficult for me to transfer my knowledge from previous apps to this. Still on the docket for tomorrow: Make our Twitter clone pretty, see how many solo challenges I can get through with the remaining time. Move into my new home at the hacker dorms. I'm going to miss having a whole room to myself, even if I did have to share it with a cat.
<br>
<br>
Until tomorrow, I'm Edwin Unger, and I'm a web developer in training.