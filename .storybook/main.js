module.exports = {
    stories: [
        '../guides/GetStarted.stories.mdx',
        '../guides/DesignRules.stories.mdx',
        '../guides/Theme.stories.mdx',
        '../guides/Colors.stories.mdx',
        '../src/**/*.stories.@(js|mdx)'
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions/register',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
    ]
};