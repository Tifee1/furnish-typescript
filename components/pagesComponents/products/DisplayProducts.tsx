import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { ProductType } from '../../types/typeDefinition'
import { formatPrice } from '../../utils/helpers'

const DisplayProducts = (product: ProductType) => {
  const { id, name, price, image } = product

  return (
    <article className='product bg-black text-white p-2 mb-8 rounded-md w-full max-w-[450px] mx-auto'>
      <div className='relative overflow-hidden'>
        <div className='h-[175px] relative'>
          <Image
            src={image}
            alt={name}
            className='trans h-[175px] w-full rounded-md'
            fill
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
        <Link
          href={`/products/${id}`}
          className='link absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yel rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center text-[1.25rem] opacity-0'
        >
          <FaSearch />
        </Link>
      </div>
      <div className='flex justify-between items-center px-4 py-4 tracking-wider'>
        <h4>{name}</h4>
        <h4 className='text-yel'>{formatPrice(price)}</h4>
      </div>
    </article>
  )
}

export default DisplayProducts
