/* Absolute Import in React | create-react-app
Last modified: November 16, 2021 bezkoder React

Create React App supports way to create React applications with a modern build setup without configuration. By default, we need to use relative paths for importing Components or Modules. In this tutorial, I will show you how to configure your React application to support ‘Absolute Import’ (Javascript and Typescript) with absolute paths.


Contents [hide]

    The problem with Relative imports
    Absolute imports
    Absolute import in React
    Absolute import in React Typescript
    Further Reading

The problem with Relative imports

When developing a React App, we may need to import certain components or modules with relative multiple nested paths. For example, if the project structure is like this:
src
common
Button.js
Navbar.js
components
TutorialDetails.js
TutorialsList.js
constants
colors.js
curDir
curFolder
bezkoder.js

In the bezkoder.js file, we will have code as following: */


import React from "react";
import Button from "../../common/Button";
import Navbar from "../../common/Navbar";
import TutorialList from "../../components/TutorialList";
import TutorialDetails from "../../components/TutorialDetails";

import { red, yellow, green } from "../../constants/colors";

/* You can see that, to write the import statement, we need to think about path of the current file and way to go to the folder that containing destination file.

How about the case we want to move the code (with all of the imports) to another file with different directory tree?
We have to update the import paths. It’s so annoying!
Absolute imports

Absolute imports help to simplify the paths because the paths is now relative to the project root directory or custom base directory.

With absolute paths and root folder is parent of src folder, we can write import statement like this:
 */
import React from "react";
import Button from "src/common/Button";
import Navbar from "src/common/Navbar";
import TutorialList from "src/components/TutorialList";
import TutorialDetails from "src/components/TutorialDetails";

import { red, yellow, green } from "src/constants/colors";

/* It looks simple and comfortable now.
Absolute import in React

When initializing React Project with create-react-app, we can configure our React application to support importing modules with absolute paths.

Just open jsconfig.json file (in the root of the project) and add baseUrl setting inside compilerOptions like this:
 */
{
  "compilerOptions": {
    ...,
    "baseUrl": "src"
  },
  "include": ["src"]
}

/* Note: We can create the jsconfig.json file if it doesn’t exist.

Now we have the working absolute imports setting with src folder as custom base directory.
 */
import React from "react";
import Button from "common/Button";
import Navbar from "common/Navbar";
import TutorialList from "components/TutorialList";
import TutorialDetails from "components/TutorialDetails";

import { red, yellow, green } from "constants/colors";

/* Absolute import in React Typescript

If you’re using TypeScript in your project and you created it with command:
npx create-react-app bezkoder-react-app --template typescript

You already have the tsconfig.json file inside project root directory.
Just open it and add the same baseUrl setting as Javascript.
 */
{
  "compilerOptions": {
    ...,
    "baseUrl": "src"
  },
  "include": [
    "src"
  ]
}
