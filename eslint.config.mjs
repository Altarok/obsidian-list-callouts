import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import obsidianmdPlugin from "eslint-plugin-obsidianmd";
import js from "@eslint/js";

export default [
  // Globale Einstellungen (Ersatz für "env": { "node": true })
  {
    languageOptions: {
      globals: {
        process: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },
  },
  // Die eigentliche Konfiguration für deine TypeScript-Dateien
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "obsidianmd": obsidianmdPlugin,
    },
    rules: {
      // Basis-Regeln von ESLint und TypeScript aktivieren
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,

      // Obsidian-Empfehlungen aktivieren
      ...obsidianmdPlugin.configs.recommended.rules,

      // Define individuellen Regel-Anpassungen
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
      "@typescript-eslint/ban-ts-comment": "off",
      "no-prototype-builtins": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off"
    },
  },
];
