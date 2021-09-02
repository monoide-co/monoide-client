import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { Login } from "pages/AuthenticationPages/Login";
import { Register } from "pages/AuthenticationPages/Register";
import { Home } from "pages/Home/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { client } from "utils";
import { ApolloProvider } from "@apollo/client";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  </ChakraProvider>
);
