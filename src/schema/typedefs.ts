import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`;
