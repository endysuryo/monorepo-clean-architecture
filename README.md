# How to use

After clone please do this

```
yarn install
yarn prepare
```

To install library in specify app (do not cd in apps/app-name)

```
yarn workspace next-clean-architecture add moment
```

and then to start dev mode (with hot reload)

```
yarn dev
```

to start dev mode a specify app

```
yarn workspace next-clean-architecture dev
```

to build

```
yarn build
```

## What's inside?

- Monorepo using Turborepo
- React clean architecture (typescript, redux, react-router, tailwindcss)
- NextJS clean architecture (typescript, redux, tailwindcss)
- Shared UI component library (typescript, tailwindcss, storybook)
- Shared eslint, tsconfig, prettier, jest configs
- Cypress integration
- Husky and lint-staged

### Apps and Packages

- `next-clean-architecture`: a [Next.js](https://nextjs.org) app
- `react-clean-architecture`: a [React](https://reactjs.org) app
- `ui`: a stub React component library shared by both `next-clean-architecture` and `react-clean-architecture` applications
- `config`: `eslint`, and `jest` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: typescript configurations used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
