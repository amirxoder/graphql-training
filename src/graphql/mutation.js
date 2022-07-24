import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: { name: $name, username: $username, email: $email, phone: $phone }
    ) {
      name
      username
      username
      phone
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updataUser($id: ID!, $name: String!) {
    updateUser(id: $id, input: { name: $name }) {
      name
      id
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
