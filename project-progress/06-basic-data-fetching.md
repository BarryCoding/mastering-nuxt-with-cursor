# 06-basic-data-fetching

## 06-01: useFetch for Chat Data Management

### Summary

This commit introduces Nuxt 4's `useFetch` composable to replace static mock data with dynamic API-driven chat fetching. The implementation demonstrates proper SSR-safe data fetching patterns and establishes a foundation for real-time chat functionality.

### Changes Overview

- **Replaced static state management** with `useFetch` in `useChats` composable
- **Added manual fetch execution** with `fetchChats` function for controlled data loading
- **Integrated fetch calls** in app initialization for immediate data availability

### Nuxt 4 useFetch Features Demonstrated

1. **Lazy Loading**: `immediate: false` prevents automatic fetching
2. **Default Values**: Empty array fallback for initial state
3. **Manual Execution**: `execute` function for controlled data fetching
4. **Type Safety**: Full TypeScript integration with `Chat[]` generic
5. **SSR Compatibility**: Works seamlessly in server-side rendering
