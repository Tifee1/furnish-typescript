import useFilterContext from '@/components/context/filtercontext'
import useProductContext from '@/components/context/productcontext'
import Hero from '@/components/layout/Hero'
import Loading from '@/components/layout/Loading'
import AllProducts from '@/components/pagesComponents/products/AllProducts'
import FilterProducts from '@/components/pagesComponents/products/FilterProducts'
import Sort from '@/components/pagesComponents/products/Sort'
import { ProductType } from '@/components/types/typeDefinition'
import { getProducts } from '@/components/utils/api'

type Props = {
  error: boolean
  products: ProductType[]
}

const Products = ({ error, products }: Props) => {
  const { loading, filters, sort, filtered_products } = useFilterContext()
  const { search, category, color, company, price, shipping, maxPrice } =
    filters

  const isFiltered =
    search !== '' ||
    category !== 'all' ||
    color !== 'all' ||
    company !== 'all' ||
    price !== maxPrice ||
    shipping !== false ||
    sort !== 'p-lowest'

  const filteredProducts = !isFiltered ? products : filtered_products

  return (
    <>
      <Hero title='products' />
      <section className='section-center gap-x-12 gap-y-6 grid tm:grid-cols-[200px,1fr] my-16 mx-auto max-w-7xl'>
        <FilterProducts products={products} />
        <div>
          <Sort products={filteredProducts} />
          {loading ? (
            <Loading />
          ) : (
            <AllProducts products={filteredProducts} error={error} />
          )}
        </div>
      </section>
    </>
  )
}
export default Products

export const getStaticProps = async () => {
  try {
    const data = await getProducts()

    return {
      props: {
        products: data,
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
