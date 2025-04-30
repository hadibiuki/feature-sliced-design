// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import pluginVue from "eslint-plugin-vue";
// import { defineConfig } from "eslint/config";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,vue}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: globals.browser } },
//   tseslint.configs.recommended,
//   pluginVue.configs["flat/essential"],
//   { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
// ]);

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['.nuxt/'],
  },

  // Base rules
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'], // Match all relevant files
    languageOptions: {
      globals: globals.browser,
      parserOptions: { parser: tseslint.parser },
    },
    rules: {
      'no-unused-vars': 'error',
    },
  },

  // Vue-specific rules
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue,
    },
    rules: {
      // 'vue/multi-word-component-names': [
      //   'error',
      //   {
      //     ignores: ['index'],
      //   },
      // ],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/no-unused-properties': [
        'error',
        {
          groups: ['props', 'data', 'computed', 'methods'],
        },
      ],
    },
  },
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser, // متغیرهای مرورگر
        ...globals.node, // متغیرهای Node.js
        defineProps: 'readonly', // متغیرهای Vue
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        ref: 'readonly',
        reactive: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        nextTick: 'readonly',
        useNuxtApp: 'readonly',
        definePageMeta: 'readonly',
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      'no-undef': 'error', // فعال کردن قانون
    },
  },

  // Extend recommended configs
  pluginJs.configs.recommended,
  // tsPlugin.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    plugins: {
      vue,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
