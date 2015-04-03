---
layout: post
title:  "Everything Old is New Again"
date:   2015-03-29
categories: blog
excerpt: "To the untrained eye, this website looks exactly like it did last week. There's still the same picture of me, my beard, and my baby on the home page. You can click on links to learn more about me, projects I'm working on, and read blogs I've written. The first two pages are still works in progress with nothing to show but a 'Coming Soon' notice."
---

<h3>Technical Blog 9: Reintroducing Jekyll</h3>
<br>
To the untrained eye, this website looks exactly like it did last week. There's still the same picture of me, my beard, and my baby on the home page. You can click on links to learn more about me, projects I'm working on, and read blogs I've written. The first two pages are still works in progress with nothing to show but a "Coming Soon" notice.
<br>
<br>
However, there's a lot going on behind the scenes that make the site cleaner, more functional, and easier to update. Here's the rundown:
<br>
<br>
First, the homepage has newly designed headers and footers. I'm using Jekyll again, something I talked about way back at the beginning of this whole adventure. Jekyll allows you to separate your html sections into separate documents, so I now have footer.html, header.html, and head.html. There's an index page (that's the main home page) that links to all of those and inserts the content into the right place. This makes it much easier to update the content once and have it take effect across the entire site, rather than having to update every single page during a redesign.
<br>
<br>
Clicking on the Blog page used to take us to a timeline layout that I built. Essentially, it was a horizontal line with lots of little lines coming out of it, and in those lines were my blog titles and links to the blogs. I liked it, but it took too long to update. Now, my Blog page is an organized list of all of my posts, sorted in reverse by date. The great thing about Jekyll is that this is automatic. I don't need to place text in a certain place. When I write a blog, as I'm doing now, all I need to do is provide a little information at the top of the page that looks like this:
<br>
<br>
---<br>
layout: post<br>
title:  "Everything Old is New Again"<br>
date:   2015-04-03<br>
categories: blog<br>
---<br>
<br>
Jekyll takes this information and automatically updates my Blog page to include the new post title and date. It also formats each blog post layout based on the layout style.
<br>
<br>
As for changes you can't see, there are several. One, I'm no longer writing this blog in HTML and updating every little aspect of it. Instead, I now write in MarkDown, which allows me to write plain text without need for extra tags or formatting. As soon as I write the blog and save it inside the right folder, Jekyll automatically formats it into HTML and sorts it on the Blog page based on its date.
<br>
<br>
You'll notice I didn't say that I 'pushed' my blog to GitHub to publish it. That's because Jekyll comes with its own local server! This is probably the most amazing part of building a site with Jekyll. As soon as I turn the server on (with command 'jekyll serve'), it automatically starts watching my entire website folder for any changes. Whenever I make a save, it catches the changes and publishes it to my live site instantly.
<br>
<br>
Also of note, I updated all of my code snippets to use Jekyll's built-in syntax highlighter. This means that all my Ruby code samples have color changes so it's easier to read and understand.
<br>
<br>
Lastly, changes that I'm leaving for another time: blog excerpts.
<br>
<br>
I worked a fair bit on creating a block on my home page that would house an excerpt of my blog (that right side of the page just begs to be utilized). I got it working, and it looks great, but having it up means my footer suddenly disappears. This is a small issue, but not one I'm willing to dive into right now. Here's the HTML and CSS for it if anyone has any suggestions.
<br>
<br>
{% highlight html %}
<div class ="blog-div">
  {excerpt population using Liquid}
    <p class="read-more"><a href="http://edwinunger.com/blog" class="button">Read More</a></p>
</div>
{% endhighlight %}
<br>
{% highlight css %}
.blog-div {
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  color: #000000;
  overflow: hidden;
  position: fixed;
  left: 65%;
  top: 30%;
  opacity: .5;
  padding: 20px;
  text-align: justify;
}
.blog-div .read-more {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  margin: 0;
  padding: 5px;
}
{% endhighlight %}
<br>
<br>
This is the last tech blog I'll be writing for Phase 0 of DBC. Stay tuned for my Cultural Blog, coming soon!
<br>
<br>
My name is Edwin Unger, and I'm a web developer in training.