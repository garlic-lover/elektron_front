import { gql } from "@apollo/client";

const TRICKS = gql`
  mutation trickCreate($trick: TrickInput) {
    trickCreate(trick: $trick)
  }
`;

export default TRICKS;
