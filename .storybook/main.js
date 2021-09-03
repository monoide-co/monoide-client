module.exports = {
  stories: [
    '../src/stories/**/*.stories.(ts|tsx|js|jsx|mdx)',
    '../src/components/**/*.stories.(ts|tsx|js|jsx|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    'storybook-addon-designs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
};
