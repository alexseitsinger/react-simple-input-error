module.exports = {
  presets: [
    ["@babel/preset-env", {
      //corejs: 3,
      //useBuiltIns: "entry",
    }],
    "@babel/preset-react",
    ["@emotion/babel-preset-css-prop", {
      autoLabel: (process.env.NODE_ENV !== "production"),
      label: "[local]",
    }],
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
  ],
  env: {
    production: {
      plugins: [
        "babel-plugin-transform-react-remove-prop-types",
      ],
    },
  },
}
