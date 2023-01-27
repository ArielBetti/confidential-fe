import { Dispatch, SetStateAction } from "react"

export type TTextEditorProps = {
  setMessage?: Dispatch<SetStateAction<string>>;
  message?: string;
  readOnly?: boolean;
};
