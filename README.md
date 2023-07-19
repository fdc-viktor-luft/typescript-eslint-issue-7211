# typescript-eslint-issue-7211

Minimal reproduction repo for [#7211](https://github.com/typescript-eslint/typescript-eslint/issues/7211).

1. `pnpm i` (or any other package manager install)
2. `pnpm lint` (or e.g. `npm run lint`)

By specifiying dependencies `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` the issue appears when using
the config from `@vue/eslint-config-typescript`. It lists older versions as dependencies, but the newer installed once cause side effects.
