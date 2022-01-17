{/* Functions passed to event handlers must be passed, not called. For example:
        passing a function (correct)	calling a function (incorrect)
        <button onClick={handleClick}>	<button onClick={handleClick()}>

        The difference is subtle. In the first example, the handleClick function is passed as an onClick event handler. This tells React to remember it and only call your function when the user clicks the button.

        In the second example, the () at the end of handleClick() fires the function immediately during rendering, without any clicks. This is because JavaScript inside the JSX { and } executes right away.

        When you write code inline, the same pitfall presents itself in a different way:
        passing a function (correct)	calling a function (incorrect)
        <button onClick={() => alert('...')}>	<button onClick={alert('...')}>

        Passing inline code like this won’t fire on click—it fires every time the component renders:

        // This alert fires when the component renders, not when clicked!
        <button onClick={alert('You clicked me!')}>

        If you want to define your event handler inline, wrap it in an anonymous function like so:

        <button onClick={() => alert('You clicked me!')}>

        Rather than executing the code inside with every render, this creates a function to be called later.

        In both cases, what you want to pass is a function:

    <button onClick={handleClick}> passes the handleClick function.
    <button onClick={() => alert('...')}> passes the () => alert('...') function. */}

          <label>Example1</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            //react will run the JS in onChange={..} on render,
            //therefore your function will get run instantly on render,
            //and then bind onChange  to whatever passwordChangeHandler
            //returns
            //passing it a function reference, either directly
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <label>Example2</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            // i can pass values up this is a callback?
            //function reference, creating a new one using an arrow function
            onChange={() => passwordChangeHandler()}
            onBlur={validatePasswordHandler}
          />
          <label>Example3</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            //runs automatically?
            //onChange expects a function reference, that is in this example,
            //you are calling the function, and what onChange gets is its return value.
            onChange={passwordChangeHandler()}
            // Standard runs on change
            onBlur={validatePasswordHandler}
          />
        </div>