module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false
            }
        ],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-syntax-dynamic-import'
    ],
    comments: false,
    ignore: ['dist/*.js'],
    env: {
        test: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'],
            plugins: [
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread',
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-syntax-dynamic-import'
            ]
        }
    }
};
