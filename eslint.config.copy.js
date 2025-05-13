import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vue from 'eslint-plugin-vue'
import boundaries from 'eslint-plugin-boundaries'

// /** @type {import('eslint').Linter.FlatConfig[]} */
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

  //   eslint-config-typescript

  {
    plugins: {
      boundaries,
    },
    rules: {
      'boundaries/element-types': [
        2,
        {
          default: 'disallow',
          rules: [
            {
              from: 'features',
              allow: ['entities', 'shared'],
            },
            {
              from: 'entities',
              allow: ['shared'],
            },
            {
              from: 'processes',
              allow: ['features', 'entities', 'shared'],
            },
            {
              from: 'pages',
              allow: ['processes', 'features', 'entities', 'shared'],
            },
            {
              from: 'shared',
              allow: [],
            },
          ],
        },
      ],
    },
    settings: {
      'boundaries/elements': [
        { type: 'shared', pattern: 'shared/**' },
        { type: 'entities', pattern: 'entities/**' },
        { type: 'features', pattern: 'features/**' },
        { type: 'processes', pattern: 'processes/**' },
        { type: 'pages', pattern: 'pages/**' },
      ],
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
