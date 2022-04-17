/* DRY or don't repeat yourself.

I want to explain how you can use it to make your code more clean
but also some limitations and some gotchas with following this paradigm so

################## DRY - Sometimes you are inclided to copy paste code - dont do that. ##################

what exactly does don't repeat yourself mean so when you're writing code sometimes you might be inclined to copy
and paste code from one part of your system to another part and if you keep doing that you might just have a bunch
of copy paste code all over the place and i think this is the main thing that
don't repeat yourself for keeping your code dry is trying to address it's kind
of preventing you from copying and pasting your code everywhere to make
stuff kind of unmanageable but i think there's some more important takeaways from dry and i think it really is all
about:


################## Keep your business logic and constants centralized. ##################


keeping all of your business logic and your business constants kind of
centralized but you don't kind of duplicate them across your entire system because it makes it really hard in the future
 */