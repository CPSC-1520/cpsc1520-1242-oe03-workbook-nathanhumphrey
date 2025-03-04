import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';


/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
    stylisticJs.configs.all,
    {languageOptions: {'globals': globals.browser},
        rules: {'@stylistic/js/quotes': [
            'error',
            'single'
        ],
        '@stylistic/js/quote-props': 'off'}}
];
