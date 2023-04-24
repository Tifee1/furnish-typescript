import Image from 'next/image'
import { useState } from 'react'

type Props = {
  images: { url: string; id: string }[]
}

const Images = ({ images = [{ url: '', id: '' }] }: Props) => {
  const [index, setIndex] = useState(0)

  return (
    <section className='mb-6'>
      <div className='relative w-full h-[300px] im:h-[600px] md:h-[500px] overflow-hidden'>
        {images[1] && (
          <Image
            src={images[index].url}
            alt='main'
            className='trans object-cover rounded-md hover:scale-125'
            fill
          />
        )}
      </div>
      <div className='mt-8 grid grid-cols-5 gap-2'>
        {images.map((item, i) => {
          return (
            <div
              className='relative w-full h-[50px] im:h-[100px] md:h-[75px]'
              key={i}
            >
              {images[1] && (
                <Image
                  src={item.url}
                  alt={item.id}
                  className={`object-cover rounded-md cursor-pointer ${
                    i === index && 'border border-yel shadow-dark'
                  }`}
                  onClick={() => setIndex(i)}
                  fill
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Images
