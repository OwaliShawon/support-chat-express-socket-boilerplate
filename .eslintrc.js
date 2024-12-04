module.exports = {
    env: {
        browser: true,
        commonjs: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        eqeqeq: 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'prefer-const': 0,
        'no-param-reassign': 0,
        'no-underscore-dangle': 0,
        'no-restricted-syntax': 0,
        'no-useless-escape': 0,
        'no-use-before-define': 0,
        'no-unused-vars': 0,
        'no-unused-expressions': 0,
        'no-console': 0,
        'no-shadow': 0,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js'],
            },
        },
    },
};
