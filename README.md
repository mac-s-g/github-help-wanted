# github-help-wanted

[GitHub Help Wanted](https://mac-s-g.github.io/github-help-wanted/dist/index.html) was built to help connect developers to open-source projects.

## How to Contribute

This website is written in [React](https://github.com/facebook/react) using the [Semantic-UI-React](https://react.semantic-ui.com) css framework.

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

### Run the Production Build

The build runs in a container and outputs files into `github-help-wanted/dist/`.  Here's how to instantiate the build process:

1. `cd github-help-wanted/`
2. `./docker/build.sh`
3. Verify the result by exploring the output in your web browser:
     * `cd dist/`
     * open `index.html` in a web browser
4. If your changes look good, send me a pull request!

