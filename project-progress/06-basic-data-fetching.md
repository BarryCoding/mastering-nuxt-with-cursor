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

## 06-02: useState with Data Fetching

### Summary

This section demonstrates advanced Nuxt 4 `useState` patterns combined with data fetching to create reactive, persistent state management. The implementation shows how to bridge `useFetch` results with global state using `useState`, enabling seamless data synchronization across components while maintaining SSR compatibility.

### Changes Overview

- **Enhanced useChats composable** with `useState` for global chat state management
- **Integrated useFetch with useState** for automatic data synchronization
- **Implemented reactive data flow** between server data and client state

### Nuxt 4 useState + Data Fetching Features Demonstrated

1. **Global State Persistence**: `useState('chats', () => [])` maintains state across route changes
2. **Data Synchronization**: Automatic sync between `useFetch` results and `useState` values
3. **SSR Hydration**: State is properly hydrated from server to client
4. **Reactive Updates**: State changes trigger automatic UI updates
5. **Manual State Control**: Direct state manipulation with `chats.value = chatsData.value`

## 06-03: Chat Message Fetching

### Summary

This commit implements granular message fetching for individual chats using Nuxt 4's `useFetch` composable.

### Changes Overview

- **Enhanced useChat composable** with dedicated message fetching via `useFetch`
- **Added fetchMessages function** for controlled message loading with status checking
- **Updated sendMessage flow** to use proper API endpoints for message creation and AI generation
- **Integrated message fetching** in chat page with top-level await for SSR compatibility
