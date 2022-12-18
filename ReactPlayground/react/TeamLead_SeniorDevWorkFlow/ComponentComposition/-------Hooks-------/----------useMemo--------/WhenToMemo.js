Memoize Everything?

I follow a rule, optimize only when performance becomes an issue.

I prefer to keep my code readable as much as possible so I can come back to it after 6 months and still come to know what's going on at a glance.

As mentioned above, you don't have throw useMemo and useCallback at every single function or object you pass down as a prop

- only if it's going to make a difference in behavior for the child.

(That said, the dependency array comparisons for useEffect

do add another use case where the child might want to receive consistent props references, which does make things more complicated.)

The other question that comes up all the time is "Why doesn't React wrap everything in React.memo() by default?".

Dan Abramov has repeatedly pointed out that memoization does still incur the cost of comparing props, and that there
are many cases where the memoization check can never prevent re-renders because the component always receives new props. As an example, see this Twitter thread from Dan:

    Why doesn’t React put memo() around every component by default? Isn’t it faster? Should we make a benchmark to check?

    Ask yourself:

    Why don’t you put Lodash memoize() around every function? Wouldn’t that make all functions faster? Do we need a benchmark for this? Why not?

Also, while I don't have a specific link on it, it's possible that trying to apply this to all components by default might result in bugs due to cases where people are mutating data rather than updating it immutably.

I've had some public discussion with Dan about this on Twitter. I personally think it's likely that using React.memo() on a widespread basis would likely be a net gain in overall app rendering perf.

As I said in an extended Twitter thread last year:

    The React community as a whole seems to be over obsessed with "perf", yet much of the discussion revolves around outdated "tribal wisdom" passed down via Medium posts and Twitter comments rather than based on concrete usage.

    There's definitely collective misunderstanding about the idea of a "render" and the perf impact.


    Yes, React is totally based around rendering - gotta render to do anything at all. No, most renders aren't overly expensive.

             "Wasted" rerenders certainly aren't the end of the world.

                Neither is rerendering the whole app from the root.

                That said, it's also true that a "wasted" rerender with no DOM update is CPU cycles that didn't need to be burned.

                Is that a problem for most apps? Probably not.

                Is it something that can be improved? Probably.


    Are there apps where default "rerender it all" approaches aren't sufficient? Of course, that's why sCU, PureComponent, and memo() exist.




    Should users wrap everything in memo() by default? Probably not, if only because you should think about your app's perf needs.

    Will it actually hurt if you do? No, and realistically I expect it does have a net benefit (despite Dan's points about wasted comparisons)



    Are benchmarks flawed, and results highly variable based on scenarios and apps? Of course. That said, it would be REALLY REALLY HELPFUL if folks could start pointing at hard numbers for these discussions instead of playing the telephone game of "I saw a comment once..."



    I'd love to see a bunch of benchmark suites from the React team and the larger community to measure a bunch of scenarios so we could stop arguing about most of this stuff once and for all. Function creation, render cost, optimization... CONCRETE EVIDENCE, PLEASE!

But, no one's put together any good benchmarks that would demonstrate whether or not this is true:

    Dan's standard answer is that app structure and update patterns vary drastically, so it's hard to make a representative benchmark.

    I still think some actual numbers would be useful to aid the discussion

There's also an extended issue discussion on "When should you NOT use React.memo? in the React issues.

(And yes, this blog post is basically a long-delayed and much-expanded version of that tweet thread, although I'd actually forgotten I'd tweeted all that until I ran across it just now while researching the post.)
