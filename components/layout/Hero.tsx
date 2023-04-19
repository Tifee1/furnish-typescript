import Link from 'next/link'

type Props = {
  title: string
  subtitle?: string
}

const Hero = ({ title, subtitle }: Props) => {
  return (
    <div className='hero bg-yel py-12 md:py-20 px-4 text-center md:text-yel grid justify-center items-center'>
      <h2 className='font-bold pb-4 md:pb-8'>{title}</h2>
      <h3 className='text-white'>
        <Link href='/'>Home</Link>
        <span>
          {' '}
          <span className='text-black'>/ </span>
          {title}
        </span>
        {subtitle && (
          <span>
            {' '}
            <span className='text-black'>/ </span>
            {subtitle}
          </span>
        )}
      </h3>
    </div>
  )
}
export default Hero
