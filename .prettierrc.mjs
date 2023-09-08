/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "avoid",
  requirePragma: false,
  insertPragma: false,
  useTabs: false,
  bracketSameLine: false,
  printWidth: 100,
  endOfLine: "auto",
};
