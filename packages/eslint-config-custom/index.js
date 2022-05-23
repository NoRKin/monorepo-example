module.exports = {
  extends: ["prettier", "react-app"],
  rules: {
    "react/jsx-key": "off",
     "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 2,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["prettier"]
};
