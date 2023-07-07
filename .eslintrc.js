module.exports = {
    parser: 'vue-eslint-parser',
    plugins: [
        '@kalimahapps/eslint-plugin-tailwind',
        'unused-imports',
    ],
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:tailwindcss/recommended',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'comma-dangle': [ 'error', {
            arrays: 'always',
            objects: 'always',
            imports: 'always',
            exports: 'always',
            functions: 'never',
        }, ],
        indent: [ 'error', 4, ],
        semi: [ 'error', 'never', ],
        'space-before-function-paren': [ 'error', 'always', ],
        'array-bracket-spacing': [ 'error', 'always', ],
        'space-infix-ops': [ 'error', { int32Hint: false, }, ],
        'arrow-parens': 'error',
        quotes: [ 'error', 'single', ],
        'tailwindcss/no-custom-classname': [ 'error', {
            whitelist: [
                'fa(-.*)?',
            ],
        }, ],
        'vue/html-indent': [
            'error',
            4,
            {
                ignores: [ 'noscript', ],
            },
        ],
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        '@kalimahapps/tailwind/multiline': [
            'error',
            {
                maxLen: 120,
            },
        ],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],
    },
}
