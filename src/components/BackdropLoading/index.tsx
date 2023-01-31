// components
import { LoadingStatus } from '../'

// types
import { TBackdropLoadingProps } from './types'

// ::
const BackdropLoading = ({ open }: TBackdropLoadingProps) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 min-w-screen min-h-scren overflow-hidden bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center'>
      <LoadingStatus size={70} />
    </div>
  )
}

export default BackdropLoading