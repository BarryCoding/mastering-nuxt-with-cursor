import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // antfu rules
    rules: {
      'antfu/if-newline': 'off',
    },
  }),

  // vue rules
  {
    files: ['**/*.vue'],
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
    },
  },

  // style rules
  {
    rules: {
      'style/operator-linebreak': 'off',
      'style/brace-style': 'off',
      'style/arrow-parens': 'off',
    },
  },
)
