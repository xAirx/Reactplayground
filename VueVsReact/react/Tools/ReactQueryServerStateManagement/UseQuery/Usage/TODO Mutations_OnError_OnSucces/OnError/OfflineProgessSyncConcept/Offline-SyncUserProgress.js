https://medium.com/myanlearn-blog/myanlearn-x-react-query-313ccfdae915

/* Mutations for Side-Effects

One of our feature was audio book.
We also use the mutation APIs to keep track of users’s progress.
One good thing about mutation API is that there are onSuccess and onError callbacks.
When the user has no internet, we store the progress in localStorage using onError callback.
Only when the internet is back, we sync the progress data with backend server.
Let me try to explain our flow as following.


 The page L has the list of chapters and it has the overall progress.
 User will click a chapter and it will go to page M (a).
 User will read a chapter there and the progress for the chapter is sent to our backend for tracking (b).
 The process is called mutation and there are a few callbacks.
 So, we used `onMutate` callback to mutate the overall progress ( c)
 while waiting for the response from request b. If the request is successful, everything is fine.
 If there is an error because of some reason, we store the progress in localStorage (d).
 On the next session, we try to sync the reading progress by clearing the data from localStorage. */