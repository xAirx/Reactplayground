/*

You should use Promises only for asynchronous functions and nothing else. Do not abuse them as an error monad,

that would be a waste of resources and their inherent asynchrony will make every­thing more cumbersome.

When you have synchronous code, use try/catch for exception handling. */

https://stackoverflow.com/questions/42648956/what-is-faster-try-catch-vs-promise

/* Wrong */
return new Promise(function(resolve, reject) {
    resolve(x / y);
}).catch(err => NaN)

/* Right */
try {
    return x / y;
} catch(e) {
    return NaN;
}

/* If you already have promise code, you can avoid that in certain situations: when you want the exception to reject the promise.

In those cases you should just let the builtin error handling of your promises do its job, and not complicate everything by an additional but pointless try/catch layer:
 */
/* Wrong */
new Promise(function(resolve, reject) {
    try { // when used synchronous in the executor callback
        …
        resolve(somethingSynchronous());
    } catch (e) {
        reject(e);
    }
});

/* Right */
new Promise(function(resolve, reject) {
    …
    resolve(somethingExceptionally());
});

/* Wrong */
….then(function(res) {
    try {
        …
        return somethingExceptionally();
    } catch(e) {
        return Promise.reject(e);
    }
}).…

/* Right */
….then(function(res) {
    …
    return somethingExceptionally();
}).…
