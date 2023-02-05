import { gql } from "@apollo/client";

//Create query mutation
export const ADD_TIMER_MUTATION = gql`
  # Defining variables as the parameters in mutation
  mutation Mutation($title: String!, $description: String!, $imgUrl: String!) {
    addSequenceTimer(title: $title, description: $description, imgUrl: $imgUrl) {
      title
      description
      imgUrl
    }
  }
`;