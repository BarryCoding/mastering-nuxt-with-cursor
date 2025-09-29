# 01-project-setup

## 01-01: hidden-learning

This commit established the foundation documentation for the project setup process. The file serves as a comprehensive guide covering:

- Node.js version management with nvm
- Package manager configuration
- Development tool integration steps
- Setup commands and configurations

**Key Details:**

- Documented Node.js LTS version (v22.20.0) for consistency
- Included `.nvmrc` setup for team consistency

```sh
# Install Node.js LTS version
brew install nvm
nvm install --lts
nvm use --lts

# Set project Node.js version
node -v > .nvmrc
```

## 01-02: add vscode extensions and settings

Configured the development environment with essential VS Code extensions and workspace settings.

**Files Added:**

- `.vscode/extensions.json` - Recommended extensions for the team
- `.vscode/settings.json` - Workspace-specific settings

**Key Features:**

- ESLint integration with auto-fix on save
- Prettier as default formatter for Vue files
- Peacock color customization (Vue green theme)
- Tailwind CSS IntelliSense with custom class attributes
- Experimental class regex for Nuxt UI components

**Recommended Extensions:**

- Prettier - Code formatter
- Vue Language Features (Volar)
- Prisma (for future database work)
- Tailwind CSS IntelliSense
- ESLint

## 01-03: try some cursor rules

**File Added:**

- `.cursor/rules/nuxt.mdc` - Cursor AI rules for Nuxt 4 development

## 01-04: setup NuxtUI v4(with tailwind)

```sh
# Install NuxtUI v4 with Tailwind
pnpm add @nuxt/ui
pnpm add -D tailwindcss
```

Integrated NuxtUI v4 and Tailwind CSS into the project.

**Changes:**

- Added `@nuxt/ui` and `tailwindcss` dependencies
- Updated `nuxt.config.ts` to include `@nuxt/ui` module
- Modified `app.vue` to use `UApp` wrapper and `UButton` component
- Updated `main.css` with Tailwind and NuxtUI imports
- Enhanced VS Code settings for Tailwind CSS support

**Key Features:**

- NuxtUI v4 component library integration
- Tailwind CSS v4 for utility-first styling
- Custom Tailwind class attributes for Nuxt UI components
- Experimental class regex for better IntelliSense

## 01-05: setup ESLint with recipes

```sh
pnpm add -D @antfu/eslint-config @nuxt/eslint
```

Configured ESLint using Nuxt's recommended setup with @antfu/eslint-config.

**Changes:**

- Added ESLint dependencies (`@antfu/eslint-config`, `@nuxt/eslint`)
- Created `eslint.config.ts` with Nuxt integration
- Updated `nuxt.config.ts` to include ESLint module
- Added lint scripts to `package.json`
- Updated `.gitignore` for ESLint cache

**Configuration:**

- Uses @antfu/eslint-config for consistent code style
- Integrates with Nuxt's ESLint module
- Enables ESLint checker in development
- Standalone configuration for better performance

## 01-06: setup basic prettier and editor config

```sh
pnpm add --save-dev --save-exact prettier
```

Added Prettier configuration and EditorConfig for consistent code formatting.

**Files Added:**

- `prettier.config.ts` - Prettier configuration
- `.editorconfig` - Editor configuration for consistency

**Configuration:**

- Trailing commas for better Git diffs
- Single quotes for consistency
- No semicolons (modern JavaScript style)
- 2-space indentation
- UTF-8 encoding and LF line endings

## 01-07: setup ESLint Prettier auto fix when save

Enhanced VS Code settings to automatically fix ESLint issues and format code on save.

**Key Features:**

- ESLint auto-fix on save
- Prettier formatting on save
- Seamless integration between ESLint and Prettier
- Improved developer experience with automatic code quality

## 01-08: setup husky and lint-staged

```sh
pnpm add -D husky lint-staged
pnpm exec husky init
```

Implemented Git hooks to ensure code quality before commits.

**Changes:**

- Added `husky` and `lint-staged` dependencies
- Created `.husky/pre-commit` hook
- Configured `lint-staged` in `package.json`
- Added `prepare` script for Husky initialization

**Git Hooks:**

- Pre-commit hook runs `lint-staged`
- Automatically fixes ESLint issues in staged files
- Formats code with Prettier before commit
- Ensures consistent code quality across the team

## 01-09: improve cursor rules

Comprehensive refactoring of Cursor AI rules to improve development experience and code quality guidance.

**Files Added:**

- `.cursor/rules/ai-assistance.mdc` - AI assistance preferences and guidelines
- `.cursor/rules/code-quality.mdc` - Code quality standards and best practices
- `.cursor/rules/composables.mdc` - Vue Composables guidelines
- `.cursor/rules/nuxt-specific.mdc` - Nuxt 4 specific features and patterns
- `.cursor/rules/project-overview.mdc` - Project overview and core technologies
- `.cursor/rules/styling-ui.mdc` - UI styling and NuxtUI component guidelines
- `.cursor/rules/vue-components.mdc` - Vue 3 Component guidelines
- `.cursorignore` - Cursor AI ignore patterns

**Files Removed:**

- `.cursor/rules/nuxt.mdc` - Replaced with modular rule files

**Key Improvements:**

- Modular rule structure for better organization
- TypeScript-first approach with proper type annotations
- Comprehensive Vue 3 Composition API guidelines
- NuxtUI v4 and Tailwind CSS v4 integration
- Performance optimization and accessibility standards
- ESLint and Prettier integration guidelines
- Git workflow and code quality enforcement

**Configuration:**

- Always-applied rules for core project standards
- File-specific rules using glob patterns
- Comprehensive ignore patterns for Cursor AI

## 01-10: fix husky when commit

Fixed Husky pre-commit hook failing due to Node.js not being found in the Git hook environment.

**Problem:**

- Husky pre-commit hook was failing with `env: node: No such file or directory`
- Git hooks run in a minimal shell environment that doesn't load Node version managers
- The hook couldn't find `node` even though `.nvmrc` and `packageManager` were configured

**Root Cause:**

- Git hooks execute in non-interactive shells
- nvm (Node Version Manager) isn't loaded in the hook's shell environment
- `pnpm lint-staged` requires `node` to run, but it wasn't available

**Solution:**

- Updated `.husky/pre-commit` hook to load nvm before running commands
- Ensured the hook uses the correct Node version specified in `.nvmrc`

**Files Modified:**

- `.husky/pre-commit` - Added nvm loading and proper shebang

**Key Features:**

- Automatic Node version loading from `.nvmrc`
- Proper shell environment setup for Git hooks
- Reliable pre-commit linting and formatting
- Consistent Node version across development and Git hooks

# other hidden config from commits

## Cursor AI Integration

- Integrate [Nuxt UI MCP](https://ui.nuxt.com/docs/getting-started/ai/mcp#cursor) in Cursor
- Reload/restart Cursor to activate MCP tools
