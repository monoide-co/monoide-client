import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { InputControl } from './InputControl';

export default {
  title: 'Forms/InputControl',
  component: InputControl,
} as ComponentMeta<typeof InputControl>;

const Template: ComponentStory<typeof InputControl> = args => (
  <ChakraProvider theme={theme}>
    <InputControl {...args} />
  </ChakraProvider>
);

export const Basic = Template.bind({});

Basic.args = {
  label: 'Email',
  type: 'text',
};
