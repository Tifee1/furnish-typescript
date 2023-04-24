import Link from 'next/link'
import useProductContext from '@/components/context/productcontext'
import DisplayProducts from '@/components/pagesComponents/products/DisplayProducts'

const FeaturedProducts = () => {
  const { featured, loading, error } = useProductContext()

  if (loading) {
    return (
      <section className='py-16'>
        <div className='loading'></div>
      </section>
    )
  }

  if (error) {
    return (
      <section className='section-center py-20 text-center'>
        <h2>oops,there was an error</h2>
      </section>
    )
  }

  return (
    <section className='py-20 grid items-center'>
      <h2 className='font-[800] text-center uppercase'>featured products</h2>
      <div className='underline'></div>
      <div className='px-8 py-16'>
        <section className='grid tm:grid-cols-2 xl:grid-cols-3 tm:gap-8'>
          {featured.slice(0, 3).map((product) => {
            return <DisplayProducts key={product.id} {...product} />
          })}
        </section>
        <Link
          href='/products'
          className='trans w-[200px] text-center block mx-auto bg-yel text-white uppercase px-6 py-3 rounded-lg tracking-widest hover:bg-black mt-4'
        >
          all products
        </Link>
      </div>
    </section>
  )
}
export default FeaturedProducts
