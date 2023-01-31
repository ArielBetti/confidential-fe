// assets
import eyes from '../../assets/eyes.svg';

// types
import { TTapume } from './types';

// ::
const Tapume = ({
  description,
  title
}: TTapume) => {
  return (
    <div className='gap-2 text-center flex flex-col items-center justify-center w-full'>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <img src={eyes} className="h-72 w-72" alt="Illustração de olhos" />
      <h2 className='font-thin text-lg'>{description}</h2>
    </div>
  )
}

export default Tapume