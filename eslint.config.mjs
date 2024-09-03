import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ["**/dist", "**/node_modules", "**/*.d.ts"],
    },
    ...compat.extends("plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                project: "tsconfig.json",
            },
        },

        rules: {
            "@typescript-eslint/consistent-type-imports": "warn",
            "prettier/prettier": "warn",
        },
    },
    ...compat
        .extends("plugin:@typescript-eslint/recommended-requiring-type-checking")
        .map(config => ({
            ...config,
            files: ["**/*.ts", "**/*.tsx"],
        })),
    {
        files: ["**/*.ts", "**/*.tsx"],

        languageOptions: {
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                project: "tsconfig.json",
            },
        },
    },
    {
        files: ["**/*.cjs", "**/*.mjs"],

        languageOptions: {
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                project: null,
            },
        },

        rules: {
            "@typescript-eslint/no-var-requires": 0,
        },
    },
];
