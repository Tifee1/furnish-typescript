import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { FiUserPlus, FiUserMinus } from 'react-icons/fi'
import useUserContext from '../context/usercontext'

// import useCartContext from '../../context/cartContext'
// import { useAuth0 } from '@auth0/auth0-react'

const CartBtns = () => {
  // const { loginWithRedirect, logout } = useAuth0()

  const { setIsSidebar } = useUserContext()
  // const { noOfItems } = useCartContext()
  return (
    <div className='grid grid-cols-2 w-[220px] mx-auto items-center text-pry-100 text-2xl'>
      <Link
        href='/cart'
        className='btn shadow-none flex items-center'
        onClick={() => setIsSidebar(false)}
      >
        <span className='pr-2'>Cart</span>
        <span className='flex items-center relative'>
          <FaShoppingCart className='h-[2rem] -ml-2' />
          <span className='absolute top-[-10px] bottom-[-16px] bg-yel w-4 h-4 flex items-center justify-center rounded-full text-sm p-3'>
            {/* {noOfItems} */} 2
          </span>
        </span>
      </Link>
      {/* {isUser ? ( */}
      <button
        className='btn shadow-none hover:text-yel'
        // onClick={() => logout({ returnTo: window.location.origin })}
      >
        <span className='pr-2'>Logout</span>

        <FiUserMinus />
      </button>
      {/* ) : (
        <button
          className='btn shadow-none hover:text-yel'
          onClick={() => loginWithRedirect()}
        >
          <span className='pr-2'>Login</span>

          <FiUserPlus />
        </button>
      )} */}
    </div>
  )
}
export default CartBtns
