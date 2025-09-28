import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from '@antfu/eslint-config'

export default withNuxt(
  antfu({
    // ...@antfu/eslint-config options
  })

  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }
)
