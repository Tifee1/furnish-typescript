import Choose from '@/components/pagesComponents/home/Choose'
import Discover from '@/components/pagesComponents/home/Discover'
import FeaturedProducts from '@/components/pagesComponents/home/FeaturedProducts'
import SliderComponent from '@/components/pagesComponents/home/SliderComponent'
import { ProductType } from '@/components/types/typeDefinition'
import { getFeaturedProducts, getProducts } from '@/components/utils/api'

type Props = {
  error: boolean
  products: ProductType[]
}

export default function HomePage({ error, products }: Props) {
  return (
    <main className='page'>
      <SliderComponent />
      <Choose />
      <Discover />
      <FeaturedProducts error={error} products={products} />
    </main>
  )
}

export const getStaticProps = async () => {
  try {
    const data = await getFeaturedProducts()

    return {
      props: {
        products: data,
        error: false,
      },
      revalidate: 6000,
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
