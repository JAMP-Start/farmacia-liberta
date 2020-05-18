module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    camelcase: {
      properties: 'never',
    },
    'no-console': 'off',
    'space-before-function-paren': 'off',
    'padded-blocks': 'classes',
    'dot-notation': 'off'
  }
}
