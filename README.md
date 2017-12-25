![logo-badge](https://github.com/mac-s-g/github-help-wanted/blob/master/src/images/logo-full.png?raw=true)

GitHub Help Wanted was built to help connect developers with open-source projects.

Checkout the site at [github-help-wanted.com](http://github-help-wanted.com)

Find a project where the community needs your help and dive in!

### Help Wanted!

I want your help too!

I encourage you to:
 * :star: this project
 * checkout the open issues, or create an issue
 * post a pull request

### How to Contribute

This website is written with [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux) using the [Semantic-UI-React](https://react.semantic-ui.com) css framework.

*note: `sudo` may be required for docker interaction based on your installation config.*

#### Run the Dev Server

```bash
# clone this repository
git clone git@github.com:mac-s-g/github-help-wanted.git && cd github-help-wanted
# install dependencies
npm install --save-dev
# run the dev server at http://localhost:3100/
npm run dev:hot
```
Open a web browser on port 3100.

#### Run the Production Build

```bash
# clone this repository
git clone git@github.com:mac-s-g/github-help-wanted.git && cd github-help-wanted
# install dependencies
npm install --save-dev
# run the dev server at http://localhost:3100/
npm run build
# copy build resources to /dist/
cp ./src/images/favicon.ico README.md CNAME ./dist/
```

#### With Docker

I recommend using docker for development because it enforces environmental consistency.

If you're interested in using docker for development, checkout the [contribution instructions](https://github.com/mac-s-g/github-help-wanted/blob/master/docker/README.md) in `/docker/README.md`.