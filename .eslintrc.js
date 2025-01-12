module.exports = {
  root: true,
  env: {
    node: true
  },
  // plugins: ["es-beautifier"],
  extends: [
    "vuetify",
    "plugin:vue/essential",
    // "plugin:es-beautifier/standard"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": ["error", "never"],
    "linebreak-style": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
