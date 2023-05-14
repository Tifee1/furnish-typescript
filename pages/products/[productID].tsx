import Hero from '@/components/layout/Hero'
import Link from 'next/link'
import { formatPrice } from '@/components/utils/helpers'
import Images from '@/components/pagesComponents/singleProducts/Images'
import Stars from '@/components/pagesComponents/singleProducts/Stars'
import AddToCart from '@/components/pagesComponents/singleProducts/AddToCart'
import { GetStaticPropsContext } from 'next'
import { fetchSingleProduct, getFeaturedProducts } from '@/components/utils/api'
import { SingleProductType } from '@/components/types/typeDefinition'
import SingleProductError from '@/components/pagesComponents/singleProducts/SingleProductError'

type Props = {
  product: SingleProductType
  error: boolean
}

const SingleProduct = ({ product, error }: Props) => {
  if (error) {
    return <SingleProductError />
  }

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
    id,
  } = product

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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (!context.params) return

  const productID = context.params.productID as string

  try {
    const product = await fetchSingleProduct(productID)
    return {
      props: {
        product,
        error: false,
      },
      revalidate: 600,
    }
  } catch (error) {
    return {
      props: {
        error: true,
      },
      revalidate: 10,
    }
  }
}

export const getStaticPaths = async () => {
  const featured = await getFeaturedProducts()
  const id = featured.map((item) => item.id)

  return {
    paths: id.map((i) => {
      return { params: { productID: i } }
    }),
    fallback: 'blocking',
  }
}
