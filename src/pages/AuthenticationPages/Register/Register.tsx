import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text, Grid } from '@chakra-ui/react';

import { CardType01 } from 'components/cards/CardType01';
import { RegisterForm } from './RegisterForm';

export const Register = () => {
  const submitHandler = (user: any) => {
    console.log(user);
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
          Crea una cuenta
        </Text>
        <Text
          fontSize="md"
          fontWeight="medium"
          mt="4"
          mb="8"
          textAlign="center"
          verticalAlign="medium"
        >
          <Text as="span">¿Ya estas registrado? </Text>
          <Link to="/login">
            <Text as="u" color="orange.500">
              Inicia sesión
            </Text>
          </Link>
        </Text>
        <CardType01>
          <RegisterForm onSubmit={submitHandler} />
        </CardType01>
      </Grid>
    </Container>
  );
};
