import Link from 'next/link'

const Discover = () => {
  return (
    <section className='bg-[#DEE1E0] py-20 px-4 tm:px-20'>
      <h2 className='font-black mb-8 leading-relaxed'>
        let us make the difference
        <br />
        interior design
      </h2>
      <Link
        href='/products'
        className='trans border-2 border-pry-500 px-5 py-3 tracking-wide text-xl capitalize font-[600] hover:bg-pry-500 hover:text-pry-900'
      >
        discover more
      </Link>
    </section>
  )
}
export default Discover
