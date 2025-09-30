# 02-basic-chat-app

## 02-01: NuxtPage and simple routing

Implemented Nuxt's file-based routing system with `NuxtPage` component and created basic chat application structure.

**Key Features:**

- **File-based routing**: Nuxt automatically creates routes based on files in the `pages/` directory
- **NuxtPage component**: Renders the current page component based on the route
- **NuxtRouteAnnouncer**: Provides accessibility announcements for route changes
- **Navigation**: `UButton` with `to` prop for client-side navigation

## 02-02: NuxtLayout and default layout

Implemented Nuxt's layout system with `NuxtLayout` component and created a default layout for consistent page structure.

**Key Features:**

- **Layout system**: Nuxt provides a flexible layout system for shared page structures
- **NuxtLayout component**: Wraps pages with the appropriate layout
- **Default layout**: Automatically applied to all pages unless specified otherwise
- **Slot-based**: Layouts use Vue slots to render page content
- **CSS variables**: Uses NuxtUI CSS variables for consistent theming

## 02-03: Composables useChat

Implemented Vue 3 Composition API composable for managing chat state and functionality.

**Key Features:**

- **TypeScript interfaces**: Defined `Chat` and `ChatMessage` types for type safety
- **Mock data**: Created sample chat messages and chat object for testing
- **Composable function**: `useChat()` encapsulates chat logic and state management
- **Reactive state**: Uses `ref()` for chat data and `computed()` for derived messages
- **Message handling**: Functions to create and send messages with role-based content
- **Mock responses**: Simulated assistant responses with 200ms delay

## 02-04: Components ChatInput and ChatWindow

Implemented complete Vue 3 component architecture for chat interface with reusable components and simplified page structure following Composition API best practices.

**Key Features:**

- **ChatInput Component (NEW)**: `<script setup lang="ts">` with TypeScript interfaces for props and emits
- **Dynamic textarea**: Auto-resizing textarea using `scrollHeight` with focus management via `useTemplateRef`
- **Advanced focus handling**: Automatic focus on mount and after streaming completes using `watch()` and `nextTick()`
- **Message validation**: Empty message prevention with trimmed input validation and form submission
- **Keyboard navigation**: Enter key submission prevention with `@keydown.enter.exact.prevent`
- **Accessibility**: ARIA labels, proper form structure, and keyboard interaction patterns
- **NuxtUI integration**: `UButton` with solid variant, heroicon, and proper disabled states
- **Rounded styling**: Custom CSS with 1.8rem border-radius using NuxtUI CSS variables
- **ChatWindow Component (NEW)**: Main chat interface consuming `useChat()` composable
- **Conditional rendering**: Empty state with centered card vs active chat with message list
- **Responsive message layout**: User messages (70% width, right-aligned) vs assistant messages (full width)
- **Fixed bottom input**: Positioned input form with scrollable message container above
- **Empty state design**: Clean onboarding with elevated background card and centered title
- **Component composition**: Event-driven communication pattern with emit handlers
- **Organized CSS architecture**: Sections for layout, messages, forms, empty state, and utilities
- **Cross-browser scrollbar**: Hidden scrollbars using multiple vendor prefixes
- **Simplified chat.vue**: Reduced from placeholder `<h1>` to single `<ChatWindow />` component

## 02-05: Composable useChatScroll

Implemented Vue 3 Composition API composable for managing chat scroll behavior and auto-scrolling functionality.

**Key Features:**

- **Template refs**: Uses `useTemplateRef` for scroll container and textarea DOM access
- **Scroll position tracking**: Reactive `isAtBottom` and `showScrollButton` state with 200px threshold
- **Smooth scrolling**: Custom easing animation with `requestAnimationFrame` for 300ms duration
- **Auto-pin functionality**: `pinToBottom()` maintains scroll position when new messages arrive
- **Event management**: Scroll event listeners with proper cleanup in `onMounted`/`onUnmounted`
- **Focus management**: Automatic textarea focus on mount and scroll position updates
- **ChatWindow integration**: Provides scroll controls and button visibility for chat interface
