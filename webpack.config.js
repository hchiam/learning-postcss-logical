const postcssLogical = require("postcss-logical");

module.exports = {
  entry: "./src/styles.css", // not mentioned in the docs
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssLogical(/* pluginOptions */)],
            },
          },
        ],
      },
    ],
  },
};
