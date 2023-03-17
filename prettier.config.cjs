/** @type {import("prettier").Config} */
module.exports = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    arrowParens: "avoid",
    requirePragma: false,
    insertPragma: false,
    useTabs: false,
    bracketSpacing: true,
    bracketSameLine: false,
    printWidth: 100,
};
