import { useState } from 'react'
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa'

type Props = {
  que: string
  ans: string
}

const FaqQuestion = ({ que, ans }: Props) => {
  const [show, setShow] = useState(false)

  return (
    <div className='mb-12'>
      <div
        className={`flex justify-between ${
          show ? 'bg-yel text-white' : 'bg-white'
        } p-4 cursor-pointer`}
        onClick={() => setShow(!show)}
      >
        <h3>{que}</h3>
        <div>
          <span className='ml-4'>
            {show ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
          </span>
        </div>
      </div>
      {show && (
        <p className='pt-4 text-base tracking-wide md:w-[70%] text-black/50'>
          {ans}
        </p>
      )}
    </div>
  )
}
export default FaqQuestion
