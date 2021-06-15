# vip-annotation-manager


## Overview

This is the repository for managing the GUI client for connecting to the annotation management database for the  VIP Dolphin Acoustics Program

## Setting Up

You will need to setup a node environment for building the electron app.

Detailed installation instructions will not be stated here but please refer to [the nodejs website](https://nodejs.org/en/download/) for any issues.

### MacOS/Linux

#### Install nodejs server

`brew install node`  // Or using your favorite package manager

#### Install dependencies 

`npm install` 

#### Building the project

- Compiling typescript and all packages using webpack

`npm run build`

This will generate a dist folder with pure javascript and all libraries, react components, loaded as pure js,html, and css

- Running the app for testing purposes

`npm start`

This should open up a native App along with a console line for debugging purposes

- Packaging up the app for deployment

`npm run build`

`npm run make`

Your final app should be inside the "out" directory that will be generated

## Further reading

Please refer to the [quick-start guide](https://www.electronjs.org/docs/tutorial/quick-start) to get a crash course of what developing an electron app looks like.
Will help alieve some of the stress if you have never worked on an electron app before :)

Using typscript for this project because we are dealing with data and sql servers so type checking will be extremely useful.
The [typescript documentation](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) will give you a rough overview of this language and its relationship with javascript.
