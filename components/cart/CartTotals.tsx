import { useRouter } from 'next/router'

import useCartContext from '../context/cartcontext'
import { formatPrice } from '../utils/helpers'

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext()
  // const { isUser } = useUserContext()
  // const { loginWithRedirect } = useAuth0()
  const router = useRouter()

  return (
    <section className='flex items-center justify-center tm:justify-end'>
      <div>
        <article className='border border-[#617d98] py-6 px-12 capitalize tracking-widest'>
          <h4 className='grid grid-cols-[200px_1fr] mb-3 font-bold'>
            subtotal : <span>{formatPrice(totalAmount)}</span>
          </h4>
          <h5 className='grid grid-cols-[200px_1fr] mb-3 font-medium'>
            shipping fee : <span>{formatPrice(shippingFee)}</span>
          </h5>
          <hr className='border-[#617d98]' />
          <h3 className='grid grid-cols-[200px_1fr] mt-6 mb-3 font-black'>
            order total : <span>{formatPrice(totalAmount + shippingFee)}</span>
          </h3>
        </article>
        {/* {isUser ? ( */}
        <button
          className='trans bg-yel text-white py-2 w-full uppercase tracking-widest font-black text-lg hover:bg-black'
          onClick={() => router.push('/checkout')}
        >
          proceed to checkout
        </button>
        {/* ) : ( */}
        {/* <button
            className='trans bg-yel text-white mt-4 py-2 w-full uppercase tracking-widest font-black text-lg hover:bg-black'
            onClick={() => loginWithRedirect()}
          >
            login
          </button>
        )} */}
      </div>
    </section>
  )
}
export default CartTotals
