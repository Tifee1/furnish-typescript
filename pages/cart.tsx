import Link from 'next/link'
import useCartContext from '@/components/context/cartcontext'
import Hero from '@/components/layout/Hero'
import CartContent from '@/components/cart/CartContent'

const Cart = () => {
  const { cart } = useCartContext()

  if (cart.length < 1) {
    return (
      <main>
        <Hero title='cart' />
        <section className='min-h-[calc(100vh-20rem)] text-center mt-20'>
          <h2 className='font-semibold mb-8'>Your Cart is empty</h2>
          <Link
            href='/products'
            className='trans bg-yel text-white px-6 py-2 capitalize text-xl rounded-lg hover:bg-black'
          >
            fill it
          </Link>
        </section>
      </main>
    )
  }
  return (
    <main>
      <Hero title='cart' />
      <main className='section-center py-20'>
        <CartContent />
      </main>
    </main>
  )
}
export default Cart
