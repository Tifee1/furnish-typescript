import useCartContext from '@/components/context/cartcontext'
import { SingleProductType } from '@/components/types/typeDefinition'
import Link from 'next/link'
import { useState } from 'react'
import { FaCheck, FaMinus, FaPlus } from 'react-icons/fa'

type Props = {
  product: SingleProductType
}

const AddToCart = ({ product }: Props) => {
  const { addToCart } = useCartContext()

  const { colors, stock } = product
  const [color, setColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((old) => {
      let real = old + 1
      if (real > stock) {
        real = stock
      }
      return real
    })
  }
  const decrease = () => {
    setAmount((old) => {
      let real = old - 1
      if (real < 1) {
        real = 1
      }
      return real
    })
  }

  return (
    <article className='my-10'>
      <div className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
        <span className='font-semibold'>Colors : </span>
        <div className='flex'>
          {colors.map((c, i) => {
            return (
              <button
                key={i}
                className='w-5 h-5 rounded-full mr-2 flex items-center justify-center'
                style={{ background: c, opacity: '0.6' }}
                onClick={() => setColor(c)}
              >
                <span className='text-[0.7rem] text-white'>
                  {color === c && <FaCheck />}
                </span>
              </button>
            )
          })}
        </div>
      </div>
      <div className='w-[140px] grid grid-cols-3 place-items-center font-semibold'>
        <button
          className='text-base w-8 h-4 flex items-center justify-center py-1'
          onClick={decrease}
        >
          <FaMinus />
        </button>
        <span className='text-[2rem]'>{amount}</span>
        <button
          className='text-base w-8 h-4 flex items-center justify-center py-1'
          onClick={increase}
        >
          <FaPlus />
        </button>
      </div>
      <div className='my-8'>
        <Link
          href='/cart'
          className='trans bg-yel text-white px-4 py-2 rounded-lg capitalize tracking-widest text-xl hover:bg-black'
          onClick={() => addToCart(amount, color, product)}
        >
          add to cart
        </Link>
      </div>
    </article>
  )
}
export default AddToCart
