import Hero from '@/components/layout/Hero'
import Image from 'next/image'
import Link from 'next/link'
import Img from '/assets/404_error_img.png'

const SingleProductError = () => {
  return (
    <>
      <Hero title='404' />
      <div className='my-12 mx-8 grid justify-center'>
        <Image src={Img} alt='error' className='text-center' />
      </div>
      <h2 className='font-black mx-8 text-center uppercase'>
        ooops, this product cannot be found!!!
      </h2>
      <div className='my-8 grid justify-center'>
        <Link
          href='/products'
          className='trans bg-yel text-white px-6 py-3 capitalize tracking-widest hover:bg-black rounded-md'
        >
          back to all products
        </Link>
      </div>
    </>
  )
}

export default SingleProductError
