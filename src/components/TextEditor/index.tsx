import { useState } from 'react'
import { Node } from 'slate'

// Import the Slate editor factory.
import { createEditor, Descendant } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

// types
import { TTextEditorProps } from './types'
// ::
const TextEditor = ({ message = '', readOnly, setMessage }: TTextEditorProps) => {

  const serialize = (nodes: Descendant[]) => {
    return nodes.map(n => Node.string(n)).join('\n\n')
  }

  const [value, setValue] = useState<{
    type: string;
    children: {
      text: string;
    }[];
  }[]>([
    {
      type: 'paragraph',
      children: [{ text: message }]
    },
  ]);

  const handleEditorChange = (newValue: any[]) => {
    if (!!setMessage) {
      setValue(newValue)
      setMessage(serialize(newValue));
    }
  }

  const [editor] = useState(() => withReact(createEditor()))

  return (
    <Slate editor={editor} value={value} onChange={handleEditorChange}>
      <Editable
        readOnly={readOnly}
        className="w-full placeholder:text-zinc-500 placeholder:font-bold dark:bg-zinc-800 p-2 rounded-md shadow-sm text-xl"
        placeholder="Escreva sua mensagem" />
    </Slate>
  )
}

export default TextEditor;
