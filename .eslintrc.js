module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off'
  },
  "settings": {
    "import/resolver": {
      "alias": [
        ["components", "src/components"],
        ["layouts", "src/layouts"],
      ]
    },
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}
