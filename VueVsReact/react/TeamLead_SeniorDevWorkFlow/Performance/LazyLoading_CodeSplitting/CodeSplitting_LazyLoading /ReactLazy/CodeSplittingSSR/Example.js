As both React.lazy and Suspense are not available for rendering on the server yet now, it is recommended to use https://github.com/gregberge/loadable-components for code-splitting
in a server - rendered app(SSR).React.lazy is helpful for rendering dynamic import as a regular component in client - rendered app(CSR).

    https://yuvrajpy.medium.com/frontend-performance-optimization-with-code-splitting-using-react-lazy-suspense-1e0d1a85e32c