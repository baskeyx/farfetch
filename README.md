# Farfetch Challenge

## Install
You will need to have Node and Gulp installed to run this build.
```sh
npm install
```
## Development Build
To run the development build and preview run:

```sh
gulp
```

(files are saved in the dev directory)

## Production Build
To run the production build run:
```sh
gulp build
```
(files are saved in the dist directory)

## About the build

This repo contains a translations.json file, this file contains different versions once this is run a sepeerate copy of the html file is output and gulp-file-include package the translated copy for that version is inserted.

The dev build also compiles SASS, concatenates any Javascript files into a single scripts.js file and copies any images before running on localhost, any amends you make to markup, sass, translations.json or JavaScript should be visible within localhost.

The production build uses babel to convert any ES6 JavaScript to normal JavaScript before validating with Uglify and minifying. It validates the HTML markup before minifying (all language versions), it also copies any imagery and css into the dist folder.

If you have any questions around the project or build please let me know!

http://baskey.co/farfetch/

Dan
