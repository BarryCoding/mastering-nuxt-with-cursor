# 03-mvp

## 03-01: Nuxt 4 runtimeConfig

Implemented Nuxt 4 runtime configuration system for managing environment-specific settings and sensitive data with proper server/client-side access control.

**Key Features:**

- **Runtime configuration**: Defined `runtimeConfig` in `nuxt.config.ts` with private and public configuration keys
- **Private configuration**: `openaiApiKey` accessible only on server-side for API security
- **Public configuration**: `test` key under `public` object accessible on both client and server
- **useRuntimeConfig composable**: Accessed configuration values using `useRuntimeConfig()` in both client and server contexts
- **Server-side access**: Demonstrated runtime config usage in `/server/api/ai.ts` endpoint for secure API key access
- **Client-side access**: Implemented runtime config consumption in `app.vue` for debugging and configuration display
- **Environment variable support**: Foundation for overriding values with `NUXT_` prefixed environment variables
- **Security separation**: Private keys remain server-only while public keys are safely exposed to client

## 03-02: Nuxt 4 appConfig

Implemented Nuxt 4 application configuration system for managing build-time, reactive, and public configuration values accessible throughout the application.

**Key Features:**

- **Application configuration**: Created `app/app.config.ts` using `defineAppConfig()` helper for build-time public configuration
- **Public reactive values**: Defined application-level settings (`title: 'Nuxt Chat'`) accessible universally in both client and server contexts
- **UI theming configuration**: Implemented nested configuration structure for NuxtUI theme customization (`ui.colors.primary: 'blue'`)
- **useAppConfig composable**: Accessed configuration values using `useAppConfig()` in Vue components for reactive data consumption
- **Dynamic page titles**: Integrated `appConfig.title` with `useHead()` composable in `/app/pages/chat.vue` for SEO-friendly page titles
- **Security best practice**: Used for public, non-sensitive configuration values that can be safely exposed to the client
