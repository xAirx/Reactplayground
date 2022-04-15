
https://stackoverflow.com/questions/68525459/what-is-the-main-difference-between-react-query-and-redux

Redux and react - query are 2 very different things: react - query is used for data synchronization, Redux is a global state manager.react - query is used to keep synch all your apps to the same db, Redux is used to share a part of the app state to all the components that need to read that state.

An example: I have an app to chat with other users.With react - query I keep all the apps synch with all the messages users received, then I store the messages in Redux in order to have messages on chat page and on history chat page.
