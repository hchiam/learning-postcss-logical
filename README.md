# Learning [postcss-logical](https://github.com/csstools/postcss-logical)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://github.com/csstools/postcss-logical>

CSS logical properties let you think differently about directions in a way that is more language-independent. Here's a quick intro to CSS logical properties (watch for the summary diagram): <https://youtu.be/-oyeaIirVC0?t=418>

## Setup instructions:

<https://github.com/csstools/postcss-logical/blob/master/INSTALL.md#installing-postcss>

## What I did:

### Trying to use Webpack:

```bash
npm init
npm install postcss-logical style-loader css-loader postcss-loader --save-dev
npm install webpack webpack-cli --save-dev
mkdir src
touch src/styles.css
npx webpack
```

Note that `entry: "./src/styles.css",` is not mentioned in the `postcss-logical` docs.

### Trying to use CLI tool:

```bash
# (Previous steps)
npm install postcss-cli --save-dev
touch postcss.config.js
npx postcss src/styles.css -o dist/styles.css
```

Ah finally, this one worked easily!
