---
layout: post
title:  "DBC Phase 1, Day 1"
date:   2015-04-06
categories: blog
excerpt: "Today started at 6:30am. I loath being late, so I always arrive early. Lateness implies a lack of respect, so timeliness has always been something very important to me."
---

Today started at 6:30am. I loath being late, so I always arrive early. Lateness implies a lack of respect, so timeliness has always been something very important to me.
<br>
<br>
I arrived at 8:15. We waited in the lobby for our entire cohort to arrive. When we were all together, we were sent outside so our mentors (students who just started Phase 3) could find us and introductions could be made. We chatted a bit about the first day, the first week, Phase 1, etc., and then made our way upstairs.
<br>
<br>
We immediately sat down with everyone, which included most of the main staff and all of the students from the three Phases. Introductions of Phase 1 students were made, information about the instructors, career counselors, mental health counselors, and yoga instructors was given out, and tips from other cohorts were shared. They mostly revolved around sleeping and eating habits. We had breakfast, then got together with our cohort privately to chat more about counselors and yoga. We played a name game to get to know each other, but since we already knew most of the names of everyone, it was more of an opportunity for our teachers to get to know who we are.
<br>
<br>
We were sent out to get some lightning-round type education from the Phase 2 students. I believe most of what we learned was not for our benefit, since it was very low level. However, it was very beneficial for the Phase 2 students to get more comfortable with teaching, which in turn helps them solidify concepts that they need to know. We spent about 5 minutes each on 7 different topics, which included cultural behavior, enumerables, Git, Sublime, Arrays and Hashes, Algorithms, and variable scope. Nothing terribly complicated, but good for a basic refresher.
<br>
<br>
after the lightning-round, it was lunch time. Then, more chatting about culture, behavior, rules, etc. We have three main rules to follow: integrity, effort, and kindness. Violating one of these is grounds for expulsion, but if you're a decent human being, these wouldn't be an issue.
<br>
<br>
Finally around 4pm, we had the opportunity to play around with some code. We revisited challenges that were optional in previous weeks of Phase 0, so I thought we'd be able to breeze through them. I was quite wrong, as the challenges had changed just enough to become very interesting and much more complicated. We eventually solved everything, but only after a break at 6 for closing notes and another break at 7 to meet the coaches who will be available to us if we have questions. It was about this time that my headache became unbearable and I went in search of some relief. Luckily, Excedrin was readily available in the first-aid box and I was good to go shortly after.
<br>
<br>
Here are the two problems that we had to solve:
<br>
<br>
Roman Numerals is pretty straightforward, we needed to provide all of the cases for 1, 5, 10, 50, 100, 500, and 1000. Where we got tripped up was solving for 4, 9, 14, 40, 90, 400, and 900. We eventually realized that our if/else cascade needed to be twice as long, but once we added them in our code worked like a charm.
<br>
<br>
{% highlight ruby %}
def to_roman(num)
  a =[]
  while num > 0
    if num > 1000
      p "cannot compute."
    elsif num >= 900
      a << "CM"
      num -= 900
    elsif num >= 500
      a << "D"
      num -= 500
    elsif num >= 400
      a << "CD"
      num -= 400
    elsif num >= 100
      a << "C"
      num -= 100
    elsif num >= 90
      a << "XC"
      num -= 90
    elsif num >= 50
      a << "L"
      num -= 50
    elsif num >= 40
      a << "XL"
      num -= 40
    elsif num >= 10
      a << "X"
      num -= 10
    elsif num >= 9
      a << "IX"
      num -= 9
    elsif num >= 5
      a << "V"
      num -= 5
    elsif num >= 4
      a << "IV"
      num -= 4
    else
      (num).times do a << "I"
        num -= num
      end
    end
  end
  a.join
end
puts to_roman(987)
=> CMLXXXVII
{% endhighlight %}
<br>
Numbers to Words was our next challenge, and it was far more complicated. Again, I had worked on something similar previously, but never actually solved it past 100. We went through it very carefully, solving for smaller numbers first, then working our way up to larger integers. We both had ideas for how to make it work, but neither of us could form our suggestions into fully working code in order to get the complete solution. At one point, I had the epiphany that we should divide the number into arrays of 3 characters each, which would give us the sections for billion, million, thousand, and hundred. After that, we would just need to solve for the three numbers that should be between 0 and 999. I may have had the idea, but my pair is the one who figured out how to implement it. We realized that nested arrays were important, and once we had those we could turn the number strings back into integers again in order to manipulate them. The best part about this solution is how easy it is to scale the number up to trillions, quadrillions, etc., just by adding in an extra array for the next set of 3.
<br>
<br>
Here's what we came up with:
<br>
<br>
{% highlight ruby %}
def in_words(int)
  digits = %w{zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seveteen eighteen nineteen}
  tens = %w{ten twenty thirty forty fifty sixty seventy eighty ninety}
  string_array = int.to_s.split("")
  array_hundreds = string_array.pop(3).join("").to_i
  array_thousands = string_array.pop(3).join("").to_i
  array_millions = string_array.pop(3).join("").to_i
  array_billions = string_array.pop(3).join("").to_i
  array_trillions = string_array.pop(3).join("").to_i
  master_array = [array_trillions, array_billions, array_millions, array_thousands, array_hundreds]
  converted = master_array.map do |x|
    words = []
    if x >= 100
      hundreds = x / 100
      words << digits[hundreds] + " hundred"
      if x - (hundreds*100) >= 20
        multiple = (x-(hundreds*100)) / 10
        if multiple == 0
          words << ""
        else
          words << " " + tens[multiple-1]
        end
        mod = x % 10
        if mod == 0
          words << ""
        else
          words << " " + digits[mod]
        end
        words.join("")
      else
        words << " " + digits[(x-(hundreds*100))]
        words.join("")
      end
    elsif x >= 20
      multiple = x / 10
      words << tens[multiple-1]
      mod = x % 10
      words << digits[mod]
      words.join(" ")
    elsif x < 20
      words << digits[x]
      words.join("")
    end
  end
  reverse = converted.reverse
  numbers = [""," thousand"," million"," billion", " trillion"]
  final = []
  i = 0
  array = reverse.map do |x|
    if x != "zero"
      final << x + numbers[i]
      i += 1
    end
  end
  final.reverse.join(" ")
end
p in_words(123456789123456)
=> "one hundred twenty three trillion four hundred fifty six billion seven hundred eighty nine million one hundred twenty three thousand four hundred fifty six"
{% endhighlight %}
<br>
A lot of folks ended up solving this using a hash, but my pair had the excellent idea that having a word like 'seventeen' located in an array at the index of [17] would actually be the same as putting a key value pair of 17 => 'seventeen', so we opted for the cleaner option of the array.
<br>
<br>
We would have liked to refactor this solution to include recursion, but this is a working solution and my mentor suggested that we not stress over something so minor.
<br>
<br>
I stayed late to chat with some folks about the challenge and to see if I could help them with their code that wasn't working. It definitely helped me solidify what my pair and I had created in our code while also letting me see solutions from others. I think our nested array idea ended up being somewhat unique, so I'm not sure how much help I was to others.
<br>
<br>
All in all, a very good first day. Tonight, I skimmed through our required reading list and finished tomorrow's reading list as well. I'm already seeing an opportunity for them to assign the next day's reading the night before so that we can be ready for the challenges first thing in the morning. I wish I had more time to prepare by checking out tomorrow's challenges in more depth, but at this point sleep is more important.
<br>
<br>
Until tomorrow, my name is Edwin Unger, and I'm a web developer in training.