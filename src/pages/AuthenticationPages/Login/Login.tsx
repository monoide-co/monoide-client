import React from 'react';
import { Container, Text, Grid } from '@chakra-ui/react';
import { CardType01 } from 'components/cards/CardType01/CardType01';
import { LoginForm } from './LoginForm/LoginForm';

type loginSchema = {
  email: string;
  password: string;
};

export const Login = () => {
  const handleSubmit = ({ email, password }: loginSchema) => {
    console.log(email, password);
  };
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Grid w={['sm', 'md']}>
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
          <LoginForm onSubmit={handleSubmit} />
        </CardType01>
      </Grid>
    </Container>
  );
};
