import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postMessage
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getposts {
    posts {
      _id
      postMessage
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postMessage
        postAuthor
        createdAt
      }
    }
  }
`;
