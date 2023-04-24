import { useEffect } from 'react'

import { useRouter } from 'next/router'

import useProductContext from '@/components/context/productcontext'
import Loading from '@/components/layout/Loading'
import Hero from '@/components/layout/Hero'
import Link from 'next/link'
import { formatPrice } from '@/components/utils/helpers'
import Images from '@/components/pagesComponents/singleProducts/Images'
import Stars from '@/components/pagesComponents/singleProducts/Stars'
import AddToCart from '@/components/pagesComponents/singleProducts/AddToCart'

const SingleProduct = () => {
  const {
    fetchSingleProduct,
    singleProduct: product,
    singleLoading,
  } = useProductContext()
  const router = useRouter()

  const id = router.query.productID as string

  useEffect(() => {
    fetchSingleProduct(id)
  }, [id])

  const {
    images,
    name,
    price,
    description,
    stock,
    company,
    shipping,
    reviews,
    stars,
  } = product

  if (singleLoading) {
    return <Loading />
  }

  return (
    <>
      <Hero title='products' subtitle={product.name} />
      <main className='section-center py-20'>
        <Link
          href='/products'
          className='trans bg-yel px-3 py-2 uppercase text-base text-white tracking-wider rounded-md hover:bg-black'
        >
          back to products
        </Link>
        <div className='md:grid md:grid-cols-[1fr_1fr] md:gap-16 md:items-center my-12'>
          <Images images={images} />
          <section>
            <h2 className='tracking-wider font-bold'>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h3 className='text-yel tracking-wide mb-4'>
              {formatPrice(price)}
            </h3>
            <p className='text-black/70 mb-4'>{description}</p>

            <p className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
              <span className='font-semibold'> Available : </span>
              {stock < 1 ? 'out of stock' : `in stock (${stock} units)`}
            </p>
            <p className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
              <span className='font-semibold'> SKU : </span>
              {id}
            </p>
            <p className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
              <span className='font-semibold'>Brand : </span>
              {company}
            </p>
            <p className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
              <span className='font-semibold'>Free Shipping : </span>
              {shipping ? 'Yes' : 'no'}
            </p>
            <hr className='border-black/20' />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </main>
    </>
  )
}
export default SingleProduct
