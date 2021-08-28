import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Login } from 'pages/AuthenticationPages/Login';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </ChakraProvider>
);
