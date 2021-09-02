import React from "react";
import { Container, Text, Grid } from "@chakra-ui/react";
import { CardType01 } from "components/cards/CardType01";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { LoginForm } from "./LoginForm/LoginForm";

type TLoginSchema = {
  email: string;
  password: string;
};

const TEST_QUERY = gql`
  query GetAllCharacters {
    characters(page: 1) {
      results {
        name
        gender
      }
    }
  }
`;

export const Login = () => {
  const handleSubmit = ({ email, password }: TLoginSchema) => {
    console.log(email, password);
  };

  const { loading, error, data } = useQuery(TEST_QUERY);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {data && console.log(data)}
      <Grid w={["sm", "md"]}>
        <Text fontSize="4xl" fontWeight="extrabold" align="center">
          Inicia sesión
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
          <Link to="/register">
            <Text as="u" color="orange.500">
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
