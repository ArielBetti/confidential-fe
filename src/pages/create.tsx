import { useState } from "react"

// icons
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

// components
import { Button, Input, TextEditor } from "../components"
import { useCreateMessageMutation } from "../queries/useCreateMessageMutation"

// ::
const Create = () => {
  const createMessage = useCreateMessageMutation();

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col items-center justify-center w-full container mx-auto px-4 gap-2">
      <div className="w-full max-w-2xl gap-2 flex flex-col items-start justify-center">
        <Input placeholder="Titulo" onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Sub titulo" onChange={(e) => setSubTitle(e.target.value)} />
        <TextEditor setMessage={setMessage} />
        <div className="gap-2 flex items-end justify-end w-full">
          <Button onClick={() => createMessage.mutate({
            message,
            title,
            subTitle
          }, {
            onSuccess: (response) => console.log('success', response),
          })} className="font-semibold text-lg">
            Send
            <PaperAirplaneIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Create
