module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    //설정
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    //설정
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier'], //설정
  rules: {
    //설정
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    'react/react-in-jsx-scope': 'off', //react17 이상을 위한 설정
  },
}
