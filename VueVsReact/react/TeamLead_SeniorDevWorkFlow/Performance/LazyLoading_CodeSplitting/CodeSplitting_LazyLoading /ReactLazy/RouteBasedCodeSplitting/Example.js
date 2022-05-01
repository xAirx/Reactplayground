
/* Route based code splitting: It can be difficult to implement code - splitting in code, the bundles can be split evenly, which will improve the experience for the user. *///////////////////////


import React from 'react';

https://yuvrajpy.medium.com/frontend-performance-optimization-with-code-splitting-using-react-lazy-suspense-1e0d1a85e32c



import Suspense from 'react';
import lazy from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
const HomeComponent = lazy(() => import('./routes/HomeComponent'));
const BlogComponent = lazy(() => import('./routes/BlogComponent'));

const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <Switch>
                <Route path={"/home"}>
                    <HomeComponent />
                </Route>
                <Route path={"/blog"}>
                    <BlogComponent />
                </Route>
                <Route path="/">
                    <Redirect to={"/home"} />
                </Route>
            </Switch>
        </BrowserRouter>
        <Suspense />
        );