---
layout: page
title: Projects
permalink: /projects/
---
<script>
var site_id='acs-development';
(function(b,t,r,a,i,n){b['bt']=b['bt']||function(){(b['_bt']=b['_bt']||[]).push(arguments);},i=t.createElement(r),n=t.getElementsByTagName(r)[0];i.async=1;i.src=a;n.parentNode.insertBefore(i,n);})(window,document,'script','https://cdn.boomtrain.com/p13n/'+site_id+'/p13n.min.js');
</script>

<h3>HomeBase:</h3>
<center><img style="border:5px solid black" src="https://github.com/edwinunger/edwinunger.github.io/blob/master/images/homebase.png?raw=true"/></center>
<br>
This project was built in a 36 hour period during Dev BootCamp's 2015 Independence Day Hackathon. It's an idea I've wanted to pursue for a while, and was excited to create the prototype with a great team.
<br>
<br>
Keeping track of what's going on with your family and at home can be tough. Where are my kids? What's the schedule for the week? What are we having for dinner? Did I remember to turn the lights off? Lock the doors? Set the alarm? Air conditioner? HomeBase takes all of the tools you need and puts them on one page. Currently, HomeBase allows you to see where your family members are, chat with them, and control your smart lights.
<br>
<br>
<strong>Future Plans:</strong> calendar, reminders, meal plans, video chat, homework help, smart locks control, smart home alarm control, smart A/C control.
<br>
<strong>GitHub:</strong><a href="https://github.com/edwinunger/homebase"> https://github.com/edwinunger/homebase</a>
<br>
<strong>Uses:</strong> Rails, Ruby, JavaScript, jQuery, Google OAuth, Google Maps API, Firebase, Philips HUE API, Materialize CSS.
<br>
<br>
<br>
<br>
<h3>FeelsLike:</h3>
<center><img style="border:5px solid black" src="https://github.com/edwinunger/edwinunger.github.io/blob/master/images/feels-like.png?raw=true"/></center>
<br>
When you move to a new city, you want to prepare for what the weather is going to be like. More than that, you want to know how the weather in your new city compares to what you're used to in your current city. FeelsLike takes two cities and directly compares their historical weather data to give you a plain English answer. Select two cities, view D3 graphs for actual temperatures, perceived temperatures, and daylight hours. Click the arrows on each graph to directly compare the two cities on each value. Check out the 'Compare' tab to see how the cities relate on a month-to-month basis.
<br>
<br>
<strong>The site:</strong> <a href="http://feels-like-dbc.herokuapp.com">http://feels-like-dbc.herokuapp.com</a>
<br>
<strong>Back-End:</strong> <a href="https://github.com/FeelsLikeDBC/FeelsLikeBackend/tree/master">https://github.com/FeelsLikeDBC/FeelsLikeBackend/tree/master</a>
<br>
<strong>Front-End:</strong> <a href="https://github.com/FeelsLikeDBC/frontend/tree/master">https://github.com/FeelsLikeDBC/frontend/tree/master</a>
<br>
<strong>Uses:</strong> Rails-API, Sinatra, Ruby, JavaScript, jQuery, D3, Weather Underground API, Forecast.io API, HTML5, CSS3.
<br>
<br>
<br>
<br>
<h3>Stack GopherFlow:</h3>
<center><img src="https://github.com/edwinunger/edwinunger.github.io/blob/master/images/stack-gopherflow.png?raw=true"/></center>
<br>
Stack GopherFlow is a Stack OverFlow clone. You can view questions, add new ones, edit or delete old ones, add new answers, and upvote or downvote questions and answers.
<br>
<br>
<strong>GitHub:</strong> <a href="https://github.com/edwinunger/stack-gopherflow">https://github.com/edwinunger/stack-gopherflow</a>
<br>
<strong>Uses:</strong> Rails-API, Rails, JavaScript, jQuery, HTML5, CSS3.
<br>
<br>
<br>
<br>
<h3>Recog-A:</h3>
<center><img style="border: 5px solid black" src="https://github.com/edwinunger/edwinunger.github.io/blob/master/images/recog-a.png?raw=true"/></center>
<br>
When a patient or loved one gets Alzheimer's, it's often difficult to track changes in their short-term or long-term memory. The loss is gradual, not sudden. Recog-A serves two purposes. First, it allows caretakers to create quizzes for their patient. The quiz can contain images of loved ones, places the patient has traveled, etc. It serves as reminder to the patient of the important people or places in his life. Second, Recog-A keeps track of quiz scores over time, so it's easier to measure how much a patient's memory is deteriorating.
<br>
<br>
<strong>GitHub:</strong> <a href="https://github.com/edwinunger/recog-a">https://github.com/edwinunger/recog-a</a>
<br>
<strong>Uses:</strong> Sinatra, Ruby, JavaScript, jQuery, HighCharts, Imgur API, SendGrid API, HTML5, CSS3.

<script type="text/javascript">
    /*<![CDATA[*/ window.lightboxjs || function (c) { function g(b, d) { d && (d += (/\?/.test(d) ? "&" : "?") + "lv=1"); c[b] || function () { var i = window, h = document, j = b, g = h.location.protocol, l = "load", k = 0; (function () { function b() { a.P(l); a.w = 1; c[j]("_load") } c[j] = function () { function m() { m.id = e; return c[j].apply(m, arguments) } var b, e = ++k; b = this && this != i ? this.id || 0 : 0; (a.s = a.s || []).push([e, b, arguments]); m.then = function (b, c, h) { var d = a.fh[e] = a.fh[e] || [], j = a.eh[e] = a.eh[e] || [], f = a.ph[e] = a.ph[e] || []; b && d.push(b); c && j.push(c); h && f.push(h); return m }; return m }; var a = c[j]._ = {}; a.fh = {}; a.eh = {}; a.ph = {}; a.l = d ? d.replace(/^\/\//, (g == "https:" ? g : "http:") + "//") : d; a.p = { 0: +new Date }; a.P = function (b) { a.p[b] = new Date - a.p[0] }; a.w && b(); i.addEventListener ? i.addEventListener(l, b, !1) : i.attachEvent("on" + l, b); var q = function () { function b() { return ["<head></head><", c, ' onload="var d=', n, ";d.getElementsByTagName('head')[0].", d, "(d.", g, "('script')).", i, "='", a.l, "'\"></", c, ">"].join("") } var c = "body", e = h[c]; if (!e) return setTimeout(q, 100); a.P(1); var d = "appendChild", g = "createElement",
    i = "src", k = h[g]("div"), l = k[d](h[g]("div")), f = h[g]("iframe"), n = "document", p; k.style.display = "none"; e.insertBefore(k, e.firstChild).id = o + "-" + j; f.frameBorder = "0"; f.id = o + "-frame-" + j; /MSIE[ ]+6/.test(navigator.userAgent) && (f[i] = "javascript:false"); f.allowTransparency = "true"; l[d](f); try { f.contentWindow[n].open() } catch (s) { a.domain = h.domain, p = "javascript:var d=" + n + ".open();d.domain='" + h.domain + "';", f[i] = p + "void(0);" } try { var r = f.contentWindow[n]; r.write(b()); r.close() } catch (t) { f[i] = p + 'd.write("' + b().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();' } a.P(2) }; a.l && q() })() }(); c[b].lv = "1"; return c[b] } var o = "lightboxjs", k = window[o] = g(o); k.require = g; k.modules = c }({}); /*]]>*/</script><script type="text/javascript">window.lightboxlib = lightboxjs.require("lightboxlib", "//www.lightboxcdn.com/vendor/710f3075-f800-4fac-97ed-00ecfb7f5fe3/lightbox.js?mb=" + (new Date().getTime()));
</script>
