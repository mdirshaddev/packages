# @mdirshaddev/prettier

Prettier package with import sorting plugin named `@ianvs/prettier-plugin-sort-imports`

The default config is my own styling format for the TypeScript, JavaScript codebase

```js
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const sharedPrettierConfig = {
  singleQuote: true,
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: true,
  useTabs: false,
  semi: true,
  tabWidth: 2,
  trailingComma: 'none',
  arrowParens: 'avoid',
  embeddedLanguageFormatting: 'auto',
  plugins: ['@ianvs/prettier-plugin-sort-imports']
};

module.exports = sharedPrettierConfig;
```

# Installation

- npm

```
npm install @mdirshaddev/prettier
```

- yarn

```
yarn add @mdirshaddev/prettier
```

- pnpm

```
pnpm add @mdirshaddev/prettier
```

# How to setup

Crete a .prettierrc.js or .prettierrc.cjs when using type module then add the extension on the file as .cjs and for type common .js and define the `importOrder` with the regular expression now the prettier format will take care

```ts
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const prettierConfig = {
  ...require('@mdirshaddev/prettier'),
  importOrderParserPlugins: ['typescript', 'decorators'],
  importOrder: [
    '<TYPES>',
    '<TYPES>^[./]',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>(/.*)?$',
    '',
    '^src(/.*)$',
    '',
    '^[./]'
  ]
};

module.exports = prettierConfig;
```

```tsx
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const prettierConfig = {
  ...require('@mdirshaddev/prettier'),
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators'],
  importOrder: [
    '<TYPES>',
    '<TYPES>^[./]',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>(/.*)?$',
    '',
    '^src(/.*)$',
    '',
    '^[./]'
  ]
};

module.exports = prettierConfig;
```
