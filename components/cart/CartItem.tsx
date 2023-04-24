import Image from 'next/image'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import useCartContext from '../context/cartcontext'
import { CartType } from '../types/typeDefinition'
import { formatPrice } from '../utils/helpers'

const CartItem = (product: CartType) => {
  const { toggleAmount, removeItem } = useCartContext()
  const { name, id, price, image, amount, stock, color, shipping } = product

  return (
    <article className='grid grid-cols-[200px_auto_auto] tm:grid-cols-[1fr_1fr_1fr_1fr_auto] grid-rows-[75px] place-items-center gap-x-12 gap-y-4 mb-12'>
      <div className='grid grid-cols-[75px_125px] tm:grid-cols-[100px_200px] grid-rows-[75px] items-center gap-x-4 tracking-widest'>
        {/* Image */}
        <div className='h-full w-full relative'>
          <Image
            src={image}
            alt={name}
            className='rounded-md object-contain'
            fill
          />
        </div>

        {/* Info */}
        <div>
          <h5 className='capitalize font-semibold'>{name}</h5>
          <p className='flex justify-start items-center capitalize text-black/70'>
            color :{' '}
            <span
              className='w-2 h-2 tm:w-3 tm:h-3 rounded-full ml-2 flex'
              style={{ background: color, opacity: '0.6' }}
            ></span>
          </p>
          {shipping && <p className='text-black/70'>Free Shipping</p>}
          <p className='text-yel tm:hidden'>{formatPrice(price)}</p>
        </div>
      </div>

      <h5 className='hidden tm:block text-yel tracking-widest'>
        {formatPrice(price)}
      </h5>

      {/* Amount Btns */}
      <div className='w-[75px] grid grid-cols-3 place-items-center font-semibold '>
        <button
          className='text-base w-4 h-2 flex items-center justify-center text-[0.75rem]'
          onClick={() => toggleAmount(id, 'dec', stock)}
        >
          <FaMinus />
        </button>
        <span className='text-[1rem]'>{amount}</span>
        <button
          className='text-base w-4 h-2 flex items-center justify-center text-[0.75rem]'
          onClick={() => toggleAmount(id, 'inc', stock)}
        >
          <FaPlus />
        </button>
      </div>
      <h5 className='hidden tm:block tracking-widest text-center text-[#617d98]'>
        {formatPrice(amount * price)}
      </h5>
      {/* Delete Btn  */}
      <div>
        <button
          className='bg-red-700 text-white w-6 h-6 text-[0.75rem] flex items-center justify-center rounded-md'
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  )
}
export default CartItem
