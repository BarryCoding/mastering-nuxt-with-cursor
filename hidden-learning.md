# hidden learning

## nvm and node

```sh
brew install nvm

nvm install --lts # --lts means long term support

nvm use --lts

node -v # v22.20.0 on 2025 Sep 28
```

```sh
# in project root
node -v > .nvmrc
```

```sh
# .npmrc
shamefully-hoist=true
```

## integrate Nuxt UI 4

- [install Nuxt UI 4](https://ui.nuxt.com/docs/getting-started/installation/nuxt)

```sh
pnpm add @nuxt/ui
pnpm add -D tailwindcss
```

- integrate [Nuxt UI MCP](https://ui.nuxt.com/docs/getting-started/ai/mcp#cursor) in cursor. Don't forget to reload / restart cursor to make the mcp works.

```md
# cursor chat ask
Explain UApp used in @app.vue , why do I need to use it at the app level?
```