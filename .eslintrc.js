module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "no-unused-vars": "off",
    "@next/next/no-img-element": "off",
  },
  ignorePatterns: ["node_modules/", ".next/", "out/", "public/", "*.config.js", "*.config.ts"],
}
