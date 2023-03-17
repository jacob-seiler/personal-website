module.exports = {
    overrides: [
        {
            extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
            files: ["*.ts", "*.tsx"],
            parserOptions: {
                project: "tsconfig.json",
            },
        },
        {
            files: ["*.cjs"],
            rules: {
                "@typescript-eslint/no-var-requires": 0,
            },
            parserOptions: {
                project: null,
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
    },
    plugins: ["@typescript-eslint"],
    extends: ["plugin:@typescript-eslint/recommended"],
    ignorePatterns: ["dist", "node_modules"],
    rules: {
        "@typescript-eslint/consistent-type-imports": "warn",
    },
};
