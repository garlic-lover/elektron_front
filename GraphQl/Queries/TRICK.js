import { gql } from "@apollo/client";

const TRICK = gql`
  query trick($trickId: ID, $trickName: String) {
    trick(trickId: $trickId, trickName: $trickName) {
      name
      machine
      theme
      level
      description
      steps {
        instruction
        buttons
      }
      youtubeLinks
    }
  }
`;

export default TRICK;
