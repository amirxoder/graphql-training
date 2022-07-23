import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      data {
        name
        email
        phone
        id
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      name
      email
      username
      phone
      
    }
  }
`;
