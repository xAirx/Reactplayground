/* Named Exports: React.lazy currently supports only default exports.
An intermediate module that re - exports as default has to be created if one wants to import a module that uses named exports.
This ensures the working of tree shaking and prevents the pulling in of unused components.
 */

// Components.js
export const Component = /* ... */;
export const UnusedComponent = /* ... */;
// Component.js
export { Component as default } from "./Components.js.js.js";