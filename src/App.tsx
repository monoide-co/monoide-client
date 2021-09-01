import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Login } from 'pages/AuthenticationPages/Login';
import { Register } from 'pages/AuthenticationPages/Register';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { mockServer } from 'mockServer';
import { ColorModeSwitcher } from './ColorModeSwitcher';

mockServer();

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  </ChakraProvider>
);
