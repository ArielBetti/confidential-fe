import { Dispatch, SetStateAction } from "react"

export type TTextEditorProps = {
  setMessage?: Dispatch<SetStateAction<{
    type: string;
    children: {
      text: string;
    }[];
  }[]>>;
  message?: {
    type: string;
    children: {
      text: string;
    }[];
  }[] | any;
};
