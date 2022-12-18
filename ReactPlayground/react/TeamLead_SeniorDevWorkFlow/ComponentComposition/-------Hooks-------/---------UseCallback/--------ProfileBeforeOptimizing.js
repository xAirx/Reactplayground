/* When thinking about performance tweaks, recall the statement:

    Profile before optimizing

When deciding to use an optimization technique, including memoization and particularly useCallback(), do:

    First — profile
    Then quantify the increased performance (e.g. 150ms vs 50ms render speed increase)

Then ask yourself: does the increased performance, compared to increased complexity, worth using useCallback()?

To enable the memoization of the entire component output I recommend checking my post Use React.memo() wisely.

Do you know use cases that are worth using useCallback()? Please share your experience in a comment below.

https://dmitripavlutin.com/dont-overuse-react-usecallback/

*/
