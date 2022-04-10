For really large applications that have high frequency state changes however, it is surpassed by other alternatives such as Redux.

The main problem with the context API is that the moment you consume a context via the useContext hook,
    you tightly couple a component to a context provider tree; forcing the connected components to rerender regardless if
they care  about all the properties inside that context provider.

You can help decouple and optimize this by building a connect HOC that passes in a subset of state as
    props and memoizes the component like this: https://lnkd.in/gDYwQd9J

The context API's strengths (depending on how you view lower level programming responsibilities)
are that it is native to React(no dependencies) and it is modular.

We are currently using it in a
way that is modular and scalable here at Ranker and have built a state management solution similar to my
library but the difference is we have multiple context stores and have a connect HOC that can pass and merge
state from multiple stores rather than a global one 👍.