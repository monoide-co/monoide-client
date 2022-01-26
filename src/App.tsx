import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/monoideTheme';

import { Login } from 'pages/AuthenticationPages/Login';
import { Register } from 'pages/AuthenticationPages/Register';
import { MyCourses } from 'pages/MyCourses';
import { Sections } from 'pages/Sections';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { mockServer } from 'mockServer';

mockServer();

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    {/* <ColorModeSwitcher justifySelf='flex-end' /> */}
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/login' />} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={MyCourses} />
        <Route exact path='/sections/:courseId' component={Sections} />
      </Switch>
    </Router>
  </ChakraProvider>
);
