import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { LoginView } from 'views/Authentication/Login';
import { BasicLayout } from 'components/layouts/BasicLayout';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <BasicLayout>
      <LoginView />
    </BasicLayout>
  </ChakraProvider>
);
