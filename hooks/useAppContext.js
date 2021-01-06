import { useContext } from "react";
import { store } from "../state/store";

export default function useAppContext() {
  return useContext(store);
}
