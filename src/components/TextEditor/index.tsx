import { useState, memo } from 'react'

// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

// types
import { TTextEditorProps } from './types'

// ::
const TextEditor = ({ message, setMessage }: TTextEditorProps) => {
  const handleEditorChange = (newValue: any[]) => {
    if (!!setMessage) {
      setMessage(newValue)
    }
  }

  const [editor] = useState(() => withReact(createEditor()))

  return (
    <Slate editor={editor} value={message} onChange={handleEditorChange}>
      <Editable
        className="w-full placeholder:text-zinc-800 dark:placeholder:text-zinc-500 placeholder:font-bold dark:bg-zinc-800 bg-white p-2 rounded-md shadow-sm text-xl"
        placeholder="Escreva sua mensagem" />
    </Slate>
  )
}

export default memo(TextEditor);
