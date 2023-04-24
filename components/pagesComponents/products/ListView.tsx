import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '../../types/typeDefinition'
import { formatPrice } from '../../utils/helpers'

type Props = {
  products: ProductType[]
}

const ListView = ({ products }: Props) => {
  return (
    <section className=''>
      {products.map((product) => {
        const { id, name, price, image, description } = product

        return (
          <article
            className='grid md:grid-cols-[auto_1fr] md:gap-8 items-center justify-center text-white p-2 mb-8 rounded-md'
            key={id}
          >
            <div className='overflow-hidden'>
              <Image
                src={image}
                alt={name}
                className='trans w-[300px] h-[200px] object-cover rounded-md hover:scale-[1.5]'
                width={300}
                height={200}
              />
            </div>
            <div className='text-black'>
              <h2 className='font-bold mt-4'>{name}</h2>
              <h4 className='text-yel tracking-wider mt-2'>
                {formatPrice(price)}
              </h4>
              <p className='my-4'>{description.slice(0, 145)}...</p>
              <Link
                href={`/product/${id}`}
                className='trans bg-yel uppercase text-white px-2 py-1 rounded-md hover:bg-black tracking-wider'
              >
                details
              </Link>
            </div>
          </article>
        )
      })}
    </section>
  )
}
export default ListView
