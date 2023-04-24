import useProductContext from '@/components/context/productcontext'
import Hero from '@/components/layout/Hero'
import Loading from '@/components/layout/Loading'
import AllProducts from '@/components/pagesComponents/products/AllProducts'
import FilterProducts from '@/components/pagesComponents/products/FilterProducts'
import Sort from '@/components/pagesComponents/products/Sort'

const Products = () => {
  const { loading } = useProductContext()

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Hero title='products' />
      <section className='section-center gap-x-12 gap-y-6 grid tm:grid-cols-[200px,1fr] my-16 mx-auto max-w-7xl'>
        <FilterProducts />
        <div>
          <Sort />
          <AllProducts />
        </div>
      </section>
    </>
  )
}
export default Products
