import { gql } from "@apollo/client";

const TRICKS = gql`
  query tricks($machine: String, $theme: String, $level: String) {
    tricks(machine: $machine, theme: $theme, level: $level) {
      name
      machine
      theme
      description
      level
      steps {
        instruction
        buttons
      }
      youtubeLinks
    }
  }
`;

export default TRICKS;
