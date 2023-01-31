import { useParams } from "react-router-dom";

// icons
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

// components
import { BackdropLoading, Card, Tapume } from "../components";

// queries & mutations
import { useDeleteMessageMutation } from "../queries/useDeleteMessageMutation";
import { useGetMessageQuery } from "../queries/useGetMessageQuery";

// ::
const Read = () => {
  const { id } = useParams();
  const deleteMessage = useDeleteMessageMutation();

  const { data, isFetching, isError, error } = useGetMessageQuery({
    id: `${id}`,
    onSuccess: () => {
      deleteMessage.mutate(`${id}`);
    },
  });

  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-start justify-start gap-2 px-4">
      <BackdropLoading open={isFetching} />
      {isError && (
        <Tapume
          title="Ops!"
          description="Parece que esse segredo já foi revelado."
        />
      )}
      {data && !isError && (
        <>
          <Card className="dark:bg-slate-900 border border-blue-400 bg-slate-900">
            <div className="flex items-center gap-2 text-blue-400">
              <div className="flex-col items-center justify-center">
                <ExclamationCircleIcon className="h-5 w-5" />
              </div>
              <div className="flex-col">
                <h1 className="text-lg">Importante!</h1>
                <p>
                  Essa mensagem vai se auto destruir após a leitura do conteúdo.
                </p>
              </div>
            </div>
          </Card>
          <h1 className="pt-5 text-3xl font-bold">{data?.title}</h1>
          <h2 className="text-xl font-semibold">{data?.subTitle}</h2>
          <div className="flex w-full flex-wrap break-words pt-5 font-thin tracking-widest">
            <p className="w-full text-lg">{data?.message}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Read;
