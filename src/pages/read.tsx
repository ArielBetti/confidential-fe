import { useParams } from "react-router-dom"
import { useGetMessageQuery } from "../queries/useGetMessageQuery";

const Read = () => {
  const { id } = useParams();
  const {
    data,
    isFetching,
    isError,
    error,
  } = useGetMessageQuery(`${id}`);

  return (
    <div className="container mx-auto px-4 flex flex-col items-start justify-start gap-2">
      <h1 className="text-3xl font-bold">
        {data?.title}
      </h1>
      <h2 className="text-xl font-semibold">
        {data?.subTitle}
      </h2>
      <div className="pt-5 font-thin flex flex-wrap break-words w-full tracking-widest">
        <p className="text-lg w-full">
          {data?.message}
        </p>
      </div>
    </div>
  )
}

export default Read
