import React from 'react';
import { Container, Text, Grid } from '@chakra-ui/react';
import { CardType01 } from 'components/cards/CardType01';
import { Link } from 'react-router-dom';
import { LoginForm } from './LoginForm/LoginForm';

type TLoginSchema = {
  email: string;
  password: string;
};

export const Login = () => {
  const handleSubmit = ({ email, password }: TLoginSchema) => {
    console.log(email, password); // eslint-disable-line
  };
  return (
    <Container
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Grid w={['sm', 'md']}>
        <Text fontSize='4xl' fontWeight='extrabold' align='center'>
          Inicia sesión
        </Text>
        <Text
          fontSize='md'
          fontWeight='medium'
          mt='4'
          mb='8'
          textAlign='center'
          verticalAlign='medium'
        >
          <Text as='span'>¿Aún no tienes una cuenta? </Text>
          <Link to='/register'>
            <Text as='u' color='orange.500'>
              crea una
            </Text>
          </Link>
        </Text>
        <CardType01>
          <LoginForm onSubmit={handleSubmit} />
        </CardType01>
      </Grid>
    </Container>
  );
};
