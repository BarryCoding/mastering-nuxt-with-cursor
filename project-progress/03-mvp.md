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

## 03-03: Integrate OpenAI Service

Implemented OpenAI service integration using the Vercel AI SDK for seamless AI-powered chat functionality with proper error handling and type safety.

**Key Features:**

- **AI SDK Integration**: Added `@ai-sdk/openai` and `ai` packages for modern OpenAI integration with streaming support and type safety
- **Service Layer Architecture**: Created dedicated `server/services/ai-service.ts` for clean separation of concerns and reusable AI functionality
- **OpenAI Model Factory**: Implemented `createOpenAIModel()` function to configure OpenAI client with GPT-4o-mini model for cost-effective AI responses
- **Chat Response Generation**: Built `generateChatResponse()` function with proper message validation and error handling for robust AI interactions
- **Runtime Configuration Integration**: Securely accessed OpenAI API key through `useRuntimeConfig()` ensuring credentials remain server-side only
- **API Endpoint Integration**: Updated `/server/api/ai.ts` to utilize the AI service layer for actual OpenAI-powered responses instead of mock responses
- **Type Safety**: Leveraged TypeScript interfaces from AI SDK (`LanguageModel`, `ModelMessage`) for compile-time type checking
- **Error Handling**: Implemented input validation for messages array and proper error propagation for debugging
