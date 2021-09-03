import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GlobalStyles } from 'styles/GlobalStyles';
export default {
  title: 'Styling/Typography',
  component: GlobalStyles,
  decorators: [withDesign],
} as ComponentMeta<typeof GlobalStyles>;

const Template: ComponentStory<typeof GlobalStyles> = args => (
  <GlobalStyles {...args} />
);

export const Typography: ComponentStory<React.FC> = () => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <h1>The quick brown fox jumps over the lazy dog</h1>
      <p>The quick brown fox jumps over the lazy dog</p>
    </>
  );
};

Typography.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YTm5wC5k1iatGAahSxjfc/Design-System?node-id=810%3A9212',
  },
};
