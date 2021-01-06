import { useState } from "react";

const machines = [
  "octatrack",
  "digitone",
  "digitakt",
  "analog four",
  "analog rythm",
];

const levels = ["beginner", "intermediate", "advanced"];

export default function useNewTrickData(_id) {
  const [name, nameChange] = useState("");
  const [machine, machineChange] = useState("octatrack");
  const [theme, themeChange] = useState("sequencer");
  const [level, levelChange] = useState("beginner");
  const [description, descriptionChange] = useState("");
  const [steps, stepsChange] = useState([{ instruction: "", buttons: [] }]);
  const [youtubeLinks, youtubeLinksChange] = useState([]);

  const selectField1 = {
    name: "Theme",
    key: theme,
    change: themeChange,
    options: ["sequencer", "sound"],
  };

  const selectField2 = {
    name: "Machine",
    key: machine,
    change: machineChange,
    options: machines,
  };

  const selectField3 = {
    name: "Level",
    key: level,
    change: levelChange,
    options: levels,
  };

  const inputFields = [
    {
      name: "Name",
      key: name,
      change: nameChange,
    },
    {
      name: "Description",
      key: description,
      change: descriptionChange,
    },
  ];

  const stepper = {
    steps,
    change: (value, index) => {
      const copied = [...steps];
      copied[index].instruction = value;
      stepsChange(copied);
    },
    buttonsChange: (value, index) => {
      const copied = [...steps];
      copied[index].buttons = value;
      stepsChange(copied);
    },
    add: () => {
      const copied = [...steps];
      copied.push({ instruction: "", buttons: [] });
      stepsChange(copied);
    },
    delete: (index) => {
      const copied = [...steps];
      copied.splice(index, 1);
      stepsChange(copied);
    },
  };

  const toSend = {
    name,
    machine,
    theme,
    description,
    level,
    steps,
  };

  return {
    inputFields,
    selectField1,
    selectField2,
    selectField3,
    stepper,
    toSend,
  };
}
