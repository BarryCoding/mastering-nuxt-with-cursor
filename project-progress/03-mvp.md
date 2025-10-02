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

## 03-04: Typing Indicator Implementation

Implemented a real-time typing indicator to provide visual feedback during AI response generation, enhancing user experience with clear communication of system state.

**Key Features:**

- **Visual Feedback**: Added animated typing indicator that appears during AI response generation to inform users that the system is processing their request
- **State Management**: Introduced `isTyping` reactive state in `/app/pages/chat.vue` to track AI response generation status
- **Component Integration**: Extended `ChatWindow` component with `isTyping` prop to display typing indicator within the message flow
- **Async Flow Control**: Implemented `handleSendMessage()` wrapper function that manages typing state lifecycle around `sendMessage()` execution
- **CSS Animation**: Added pulsing animation to typing indicator using CSS `animation: pulse 1s infinite` for smooth visual feedback
- **Message Flow Integration**: Positioned typing indicator after existing messages to maintain natural conversation flow

## 03-05: Content Rendering with MDC

Implemented markdown content rendering using Nuxt MDC (Markdown Components) to enable rich text formatting for AI chat responses with syntax highlighting and comprehensive styling.

**Key Features:**

- **MDC Module Integration**: Added `@nuxtjs/mdc` module to `nuxt.config.ts` with Shiki syntax highlighting configuration for code blocks
- **ChatMDC Component**: Created dedicated `ChatMDC.vue` component that wraps the MDC renderer with comprehensive markdown styling
- **Syntax Highlighting**: Configured Dracula theme with support for HTML, Markdown, Vue, TypeScript, and JavaScript languages
- **Comprehensive Styling**: Implemented complete markdown element styling including headings, paragraphs, code blocks, lists, tables, blockquotes, and links
- **NuxtUI Integration**: Used NuxtUI CSS custom properties for consistent theming (`--ui-text-highlighted`, `--ui-bg-inverted`, `--ui-primary`)
- **Component Integration**: Updated `ChatWindow.vue` to use `ChatMDC` component instead of plain text rendering for AI messages
- **Responsive Design**: Added proper spacing, typography, and responsive image handling for optimal display across devices

## Deployment

- Netlify failed as api/ai will not work
- Vercel just works?! api/ai works out of the box!
- ...
