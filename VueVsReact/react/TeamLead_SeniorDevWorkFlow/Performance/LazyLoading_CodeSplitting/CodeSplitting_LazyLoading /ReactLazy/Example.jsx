/* React.lazy allows for lazy loading of imports in many contexts.
The React.lazy function allows you to dynamically import a dependency and render that dependency as a component in a single line of code.
The Lazy component should then be rendered inside Suspense Component which helps to reflect some fallback content meanwhile the lazy component loads. */


import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent'));
function MyComponent () {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}
/*
The fallback prop can accept any element of React which will be rendered while waiting for the loading of the Component.
The Suspense Component can be placed anywhere above the lazy component.Moreover, multiple lazy components can be wrapped with a single Suspense Component. */

import React, { Suspense } from 'react';
const ComponentOne = React.lazy(() => import('./ComponentOne'));
const ComponentTwo = React.lazy(() => import('./ComponentTwo'));
function MyComponent () {
    return (
        <div><Suspense fallback={<div>Loading...</div>}>
            <ComponentOne />
            <ComponentTwo />
        </div>
    );
}
