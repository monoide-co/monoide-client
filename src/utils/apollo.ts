import { ApolloClient, gql, InMemoryCache, makeVar } from "@apollo/client";

const stateTypedef = gql`
  type Query {
    counter: Int
  }
`;

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
  typeDefs: stateTypedef,
});

export const counter = makeVar(0);
