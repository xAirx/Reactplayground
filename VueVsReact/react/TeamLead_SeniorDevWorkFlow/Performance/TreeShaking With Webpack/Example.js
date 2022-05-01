/* Tree Shaking for React Application Using Webpack
Tree-shaking is a concept in frontend development that involves the elimination of dead code or unused code
By taking tree-shaking concepts into consideration when writing code, we can significantly scale down the bundle size by getting rid of unused JavaScript, thereby optimizing the application and increasing its performance.

https://medium.com/@parulaugust04/tree-shaking-for-react-application-f9463aef976

Principles behind Tree Shaking:

Declare all your imports and exports for each of your modules.

The bundler (Webpack, Rollup, etc.) will analyze the dependency tree during your compilation step.

Any unused code that can be proved is automatically dropped from your final bundle or tree shaken.

The reason tree shaking is very important is because most packages installed don’t really need all dependencies & this results in importing full packages, however what really needed is a small part of that package.



Lets have an example:

Importing lodash package using CommonJS Module. This import will fetch entire package & all the un required dependencies.
 */
const lodash = require('lodash'); 70.7K(gzipped: 24.7k)

/* Importing lodash package using ES6 (ES2015) Module. This import will only fetch specific dependency with tree shaking. */


/* import {isArray} from 'lodash'; 1K (gzipped: 505)

As seen in example above the size of bundle is drastically reduced in ES6 import as compared to CommonJS module import.

To achieve tree shaking, webpack requires some configuration. Create a file name webpack.config.js and add below code: */


module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: babel - loader,
                    options: {
                        presets: [
                            ['es2015', { modules: false }]
                        ]
                    }
                }
            }
        ]
    }
}

/* If all of application code does not contain side effects, we can simply mark the property as false to inform webpack that it can safely prune unused exports. */

{
    "name": "example-project",
        "sideEffects": false
}

/* If your code have some side effects, an array can be provided in configuration instead: */

{
    "name": "example-project",
        "sideEffects": [
            "./src/file-with-side-effect.js",
            "*.css"
        ]
}

/* Conclusion

By implementing tree shaking practices website performance will get improved and reduce bundle size.
Any ideas for tree shaking in React. Do let me know in comment section */