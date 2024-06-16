module.exports = {
    env: {
        browser: true,
        es2024: true,
        node: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:tailwindcss/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'react-refresh'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'import/prefer-default-export': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/classnames-order': 'error',
        'import/extensions': 'off',
        'react-refresh/only-export-components': 'warn',
    },
    ignorePatterns: [
        '.eslintrc.cjs',
        'vite.config.ts',
        'pwa-assets.config.ts',
        'tailwind.config.ts',
        'postcss.config.js',
    ],
    settings: {},
};
