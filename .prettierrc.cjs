/** @type {import('prettier').Config} */
module.exports = {
    trailingComma: 'es5',
    semi: true,
    singleQuote: true,
    printWidth: 80,
    tabWidth: 4,
    importOrder: [
        '^react$',
        '<THIRD_PARTY_MODULES>',
        '',
        '^@/(.*)$',
        '',
        '^[./]',
        '',
        '^(.*).css$',
    ],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.0',
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
};
