import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

// icons
import {
  ExclamationCircleIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";

// queries & mutations
import { useCreateMessageMutation } from "../queries/useCreateMessageMutation";

// components
import { Button, Card, Input, LoadingStatus, TextEditor } from "../components";

// core
import { PATHS } from "../core/paths";

// utils
import { messageSerialize } from "../utils/messageSerialize";

// constants
const messageInitialState = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

// ::
const Create = () => {
  const { data, isLoading, mutate, isError } = useCreateMessageMutation();

  const [isCopyToClipBoard, setIsCopyToClipBoard] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [message, setMessage] = useState<
    {
      type: string;
      children: {
        text: string;
      }[];
    }[]
  >(messageInitialState);

  const onSendMessage = () => {
    mutate(
      {
        message: messageSerialize(message),
        title,
        subTitle,
      },
      {
        onSuccess: () => {
          setTitle("");
          setMessage(messageInitialState);
          setSubTitle("");
        },
      }
    );
  };

  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center gap-5 px-4 transition-all">
      <Card className="flex flex-col border border-blue-400 bg-slate-900 font-thin text-blue-400 dark:bg-slate-900">
        <h1 className="text-lg">
          Bem vindo ao <span className="font-semibold">Confidential</span>!
        </h1>
        <p>
          Crie uma mensagem que só pode ser vista uma única vez, após isso
          acontecer ela sera apagada para sempre!
        </p>
      </Card>
      {data && (
        <>
          <Card>
            <h3 className="font-semibold">Sua mensagem foi criada!</h3>
            <p>
              Lembre-se após abrir o conteúdo dessa mensagem ela vai se
              auto-destruir para sempre.
            </p>
            <div className="cursor-pointer pt-5">
              <CopyToClipboard
                text={`${import.meta.env.VITE_CONFIDENTIAL_URL}${PATHS.read}/${
                  data.id
                }`}
                onCopy={() => setIsCopyToClipBoard(true)}
              >
                <div className="flex max-w-xl items-center justify-start gap-2 rounded-md border border-blue-400 bg-slate-900 p-2 text-blue-400 shadow-lg">
                  <PaperClipIcon className="h-5 w-5" />

                  <p className="truncate">
                    {`${import.meta.env.VITE_CONFIDENTIAL_URL}${PATHS.read}/${
                      data.id
                    }`}
                  </p>
                </div>
              </CopyToClipboard>
            </div>
          </Card>
          {isCopyToClipBoard && (
            <Card>
              <p>Link copiado para área de transferência</p>
            </Card>
          )}
        </>
      )}
      {!data && (
        <div className="flex w-full max-w-2xl animate-fadeIn flex-col items-start justify-center gap-3">
          <Input
            value={title}
            placeholder="Titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            value={subTitle}
            placeholder="Sub titulo"
            onChange={(e) => setSubTitle(e.target.value)}
          />
          <TextEditor message={message} setMessage={setMessage} />
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center justify-start gap-2">
              {isError && (
                <>
                  <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                  <p className="font-thin text-red-500">
                    Ocorreu um erro, verifique os campos.
                  </p>
                </>
              )}
              {isLoading && (
                <>
                  <LoadingStatus size={20} />
                  <p className="animate-pulse font-thin">Enviando...</p>
                </>
              )}
            </div>
            <Button
              disabled={isLoading}
              onClick={() => onSendMessage()}
              className="font-thin"
            >
              Send
              <PaperAirplaneIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
