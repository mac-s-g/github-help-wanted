# GitHub ![logo-badge](https://github.com/mac-s-g/github-help-wanted/blob/master/src/images/help-wanted-logo-med.png?raw=true) <!-- .logo-badge height="50%" width="50%" -->

GitHub Help Wanted was built to help connect developers with open-source projects.

Checkout the site at [github-help-wanted.com](http://github-help-wanted.com)

Find a project where the community needs your help and dive in!

## Help Wanted!

I want your help too!  You're welcome to create an issue or post a pull request.

Detail on how to setup your development environment is provided below.

## How to Contribute

This website is written with [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux) using the [Semantic-UI-React](https://react.semantic-ui.com) css framework.

*note: `sudo` may be required for docker interaction based on your installation config.*

### Run the Dev Server

To run the website in a local environment:

 1. make sure [Docker is installed](https://docs.docker.com/engine/installation/)
 2. clone this repository
     * `git clone git@github.com:mac-s-g/github-help-wanted.git`
 3. build the docker container
     * `cd github-help-wanted/`
     * `./docker/build-container.sh`
 4. run the development server
     * `./docker/dev-server.sh`
 5. navigate to http://localhost:3100/ in your web browser

 After completing the steps above, you'll have [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) running in a Docker container with hot-reloading enabled.  Try updating some [source code](https://github.com/mac-s-g/github-help-wanted/tree/master/src/js).  Changes will be reflected in your browser after saving.

 *notes: if you change the dependencies in `package.json`, make sure you rebulid the container with `./docker/build-container.sh`.*

### Run the Production Build

The build runs in a container and outputs files into `github-help-wanted/dist/`.  Here's how to instantiate the build process:

1. `cd github-help-wanted/`
2. `./docker/build.sh`
3. Verify the result by exploring the output in your web browser:
     * `cd dist/`
     * open `index.html` in a web browser
4. If your changes look good, send me a pull request!

### Without Docker

I'd recommend using docker for development because it enforces environmental consistency and ensures

If you'd like to contribute without docker, you can use the following workflow to run the dev-server:

```
# clone this repository
git clone git@github.com:mac-s-g/github-help-wanted.git
# install dependencies
npm install
# run the dev server at http://localhost:3100/
npm run dev:hot
```

and run the build with:

```
# run the build
npm run build
# copy relevant files into dist dir
cp ./src/images/favicon.ico README.md CNAME ./dist/

```
