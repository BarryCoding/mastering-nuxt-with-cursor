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

## 03-CP: runtimeConfig vs. appConfig

Comprehensive comparison of Nuxt 4's two configuration systems—`runtimeConfig` for environment-driven, runtime values and `appConfig` for build-time, reactive application settings.

### Key Differences Table

| Feature                    | `runtimeConfig`                        | `appConfig`                                |
| -------------------------- | -------------------------------------- | ------------------------------------------ |
| **Purpose**                | Environment-specific & sensitive data  | Public, build-time application settings    |
| **Override Method**        | Environment variables (`NUXT_*`)       | HMR updates with `updateAppConfig()`       |
| **Accessibility**          | Private (server) / Public (client)     | Always public (both server & client)       |
| **Definition Location**    | `nuxt.config.ts` → `runtimeConfig`     | `app/app.config.ts` → `defineAppConfig()`  |
| **Access Method**          | `useRuntimeConfig()`                   | `useAppConfig()`                           |
| **Reactivity**             | Non-reactive (read-only)               | Fully reactive (can be updated at runtime) |
| **Security**               | Private keys are server-only           | All values exposed to client bundle        |
| **Best For**               | API keys, secrets, URLs, feature flags | UI themes, app title, public constants     |
| **Type Safety**            | Manual interface augmentation          | Automatic type inference                   |
| **Environment Override**   | ✅ Yes via `NUXT_*` env vars           | ❌ No (build-time only)                    |
| **Hot Module Replacement** | ❌ Requires restart                    | ✅ Yes with HMR                            |

### When to Use `runtimeConfig`

1. **Environment-specific configuration**: Values that change between development, staging, and production
2. **Sensitive data**: API keys, secrets, tokens, or credentials that must remain server-side
3. **Runtime overrides**: Configuration that can be changed via environment variables without rebuilding
4. **Security separation**: Private server-only values that should never reach the client
5. **Deployment flexibility**: Different configurations per environment without code changes

**Common use cases:**

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // Private (server-only)
    openaiApiKey: '', // API secrets
    databaseUrl: '', // Database connections
    stripeSecretKey: '', // Payment credentials

    // Public (client & server)
    public: {
      apiBase: '/api', // API endpoints
      siteUrl: '', // Public URLs
      gtmId: '', // Analytics IDs
      enableFeatureX: false, // Feature flags
    },
  },
})
```

**Environment variable override:**

```bash
# .env
NUXT_OPENAI_API_KEY=sk-abc123
NUXT_PUBLIC_API_BASE=https://api.production.com
```

### When to Use `appConfig`

1. **Build-time constants**: Public configuration determined at build time
2. **UI theming**: Colors, fonts, component defaults, and design tokens
3. **Application metadata**: App title, description, branding information
4. **Reactive configuration**: Values that can be updated at runtime in the client
5. **Module configuration**: Settings for Nuxt modules like NuxtUI themes
6. **Non-sensitive data**: Public information safe to expose in client bundle

**Common use cases:**

```typescript
// app/app.config.ts
export default defineAppConfig({
  // Application metadata
  title: 'Nuxt Chat',
  description: 'A modern chat application',
  version: '1.0.0',

  // UI theming
  ui: {
    colors: {
      primary: 'blue',
      secondary: 'gray',
    },
    darkMode: true,
  },

  // Feature defaults
  features: {
    maxMessageLength: 500,
    allowAttachments: true,
  },

  // Public constants
  social: {
    twitter: '@myapp',
    github: 'org/repo',
  },
})
```

**Runtime updates (client-side):**

```vue
<script setup lang="ts">
const appConfig = useAppConfig()

// Reactively update configuration
updateAppConfig({
  ui: {
    colors: {
      primary: 'green', // Theme switches dynamically
    },
  },
})
</script>
```

### Decision Matrix

**Choose `runtimeConfig` if:**

- ✅ Value contains sensitive information
- ✅ Value needs environment variable override
- ✅ Value differs per deployment environment
- ✅ Value should be server-only accessible

**Choose `appConfig` if:**

- ✅ Value is public and non-sensitive
- ✅ Value controls UI/UX behavior
- ✅ Value needs runtime reactivity
- ✅ Value is build-time constant
- ✅ Value is used for theming/branding

### Code Review Insights

**Current Implementation:**

- ✅ **Proper security separation**: `openaiApiKey` in `runtimeConfig` (private) correctly keeps API credentials server-side
- ✅ **Appropriate public config**: `runtimeConfig.public.test` demonstrates client-accessible values
- ✅ **Correct appConfig usage**: `title` and `ui.colors` in `app.config.ts` are ideal for non-sensitive UI configuration
- ⚠️ **Consider**: Replace hardcoded `'runtimeConfigOpenaiApiKey'` with empty string and use `NUXT_OPENAI_API_KEY` env var for production

### Next Steps & Future Enhancements

1. **Environment Variables**: Set up `.env` files with proper `NUXT_*` prefixed variables for local development
2. **Type Safety**: Add TypeScript interface augmentation for `RuntimeConfig` to ensure type-safe access
3. **Configuration Validation**: Implement runtime validation for required configuration values using a library like Zod
4. **Multi-environment Setup**: Create separate `.env.development`, `.env.staging`, `.env.production` files
5. **Theme Switching**: Leverage `appConfig` reactivity to implement dynamic theme switching in the UI
6. **Feature Flags**: Expand `runtimeConfig.public` with feature flags for controlled feature rollouts
7. **Documentation**: Document all configuration values and their expected types/values for team reference
