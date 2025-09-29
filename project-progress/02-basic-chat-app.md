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
