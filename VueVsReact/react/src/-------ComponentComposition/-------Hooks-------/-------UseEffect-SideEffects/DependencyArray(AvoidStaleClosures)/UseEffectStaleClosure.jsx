/* 3. Stale closures of hooks
3.1 useEffect()

Let's study a common case of stale closure when using useEffect() hook.

Inside the component <WatchCount> the hook useEffect() logs every 2 seconds the value of count: */

function WatchCount() {
  const [count, setCount] = useState(0);
  useEffect(function () {
    setInterval(function log() {
      console.log(`Count is: ${count}`);
    }, 2000);
  }, []);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

/*
React Stale Closure

Why does it happen?

At first render, the state variable count is initialized with 0.

After the component has mounted, useEffect() calls setInterval(log, 2000) timer function which schedules calling log() function every 2 seconds. Here, the closure log() captures count variable as 0.

Later, even if count increases when the Increase button is clicked, the log() closure called by the timer function every 2 seconds still uses count as 0 from initial render. log() becomes a stale closure.

The solution is to let know useEffect() that the closure log() depends on count and properly handle the reset of interval when count changes: */

function WatchCount() {
  const [count, setCount] = useState(0);
  useEffect(
    function () {
      const id = setInterval(function log() {
        console.log(`Count is: ${count}`);
      }, 2000);
      return function () {
        clearInterval(id);
      };
    },
    [count]
  );
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

/* With the dependencies properly set, useEffect() updates the closure as soon as count changes.

Open the fixed demo and click a few times increase. The console will log the actual value of count.

React Stale Closure Fixed

Proper management of hooks dependencies is an efficient way to solve the stale closure problem.

I recommend to enable eslint-plugin-react-hooks, which detects the forgotten dependencies. */
