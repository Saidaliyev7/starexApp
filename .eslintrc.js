module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
        'prettier',
    ],
    plugins: ['simple-import-sort', 'import', 'prettier'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-children-prop': 0,
        'no-console': 2,
        'simple-import-sort/sort': 'error',
        'import/newline-after-import': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
