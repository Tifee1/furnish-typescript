import Choose from '@/components/pagesComponents/home/Choose'
import Discover from '@/components/pagesComponents/home/Discover'
import FeaturedProducts from '@/components/pagesComponents/home/FeaturedProducts'

export default function HomePage() {
  return (
    <main className='page'>
      <Choose />
      <Discover />
      <FeaturedProducts />
    </main>
  )
}
