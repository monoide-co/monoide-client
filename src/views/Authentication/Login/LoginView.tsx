import React from 'react';
import {
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Grid,
  VisuallyHidden,
  SimpleGrid,
  extendTheme,
} from '@chakra-ui/react';
import { CardType01 } from 'components/cards/CardType01/CardType01';
import { DividerWithText } from 'components/texts/DividerWithText/DividerWithText';
import { FacebookIcon, GithubIcon, GoogleIcon } from 'components/icons';
import './LoginView.style.scss';

const theme = extendTheme();
export const LoginView: React.FC = () => (
  <Container
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Grid width="md">
      <Text fontSize="4xl" fontWeight="extrabold" align="center">
        Sign in to your account
      </Text>
      <Text
        fontSize="md"
        fontWeight="medium"
        mt="4"
        mb="8"
        textAlign="center"
        verticalAlign="medium"
      >
        <Text as="span">¿Aún no tienes una cuenta? </Text>
        <Text as="u" color="orange.500">
          crea una
        </Text>
      </Text>
      <CardType01>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Dirección de correo</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="password">
            <Grid display="flex" justifyContent="space-between">
              <FormLabel>Contraseña</FormLabel>
              <Text
                as="u"
                color="orange.500"
                fontWeight="semibold"
                fontSize="sm"
              >
                Forgot your password?
              </Text>
            </Grid>
            <Input type="password" />
          </FormControl>
          <FormControl id="login-button">
            <Button isFullWidth colorScheme="orange">
              Sign in
            </Button>
          </FormControl>
          <DividerWithText>Ingresar usando...</DividerWithText>
          <SimpleGrid mt="6" columns={3} spacing="3">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Facebook</VisuallyHidden>
              <FacebookIcon />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <GoogleIcon />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <GithubIcon />
            </Button>
          </SimpleGrid>
        </Stack>
      </CardType01>
    </Grid>
  </Container>
);
