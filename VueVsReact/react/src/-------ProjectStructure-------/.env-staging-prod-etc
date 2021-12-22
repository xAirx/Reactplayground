// PROD OR DEV EXAMPLE
REACT_APP_MEDIUM_LINK=https://medium.com/@rahuulmiishra

How to setup env files inside react app ?

So, how can we define the values depending on the environment

1- Install env-cmd package from npm

2- Make a file called .env.envName in your project root, sush as .env.staging, .env.production, ... to differentiate between variables in each environment.

3- Inside the env file add your variables in key/value representation with prefix of REACT_APP

EXAMPLE:

REACT_APP_BASE_URL = "https://....."

Your file will look like this after adding your variables.

REACT_APP_API_KEY = "\***\*"
REACT_APP_AUTHDOMAIN = "\*\***"
REACT_APP_BASEURL = "\***\*"
REACT_APP_PROJECT_ID = "\*\***"
REACT_APP_STORAGEBUCKET = "\*\*\*\*""

4- Inside your package.json. change the scripts builds.

"scripts": {
"start": "env-cmd -f .env.staging react-scripts start",
"build:staging": "env-cmd -f .env.staging react-scripts build",
"build:production": "env-cmd -f .env.production react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

    -f flag is for custom env file paths as the default is in the project root otherwise you should specify the actual path

"start": "env-cmd -f ../../.env.staging react-scripts start",

    Your build command in each environment is not npm run build any more its npm run build:staging , npm run build:production.

How to read variables values in js files ?

to use a value of a particular variable located in env file inside a js file all u need to do is to use the global process.env.variableName

EXAMPLE:

console.log(process.env.REACT_APP_API_KEY)

Important Notes

1- Don't forget to add your all env files to git-ignore file if not already added to prevent tracking them after any modification.

2- After each modification in env file, stop the server and start it again, otherwise it wont read your new changes.

3- stick to your company/team for env files naming convention, as not all deployments processes accepts the .env.envName convention.

For example vercel doesn't accept '.' in the env file name at all.

\*NOTE: I propose .env.local instead of .env because create-react-app add this file to gitignore when we create a project.
