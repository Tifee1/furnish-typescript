import { CartProvider } from '@/components/context/cartcontext'
import { FilterProvider } from '@/components/context/filtercontext'
import { ProductProvider } from '@/components/context/productcontext'
import { UserProvider } from '@/components/context/usercontext'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  if (loading) {
    return (
      <section className='mb-12'>
        <div className='loading'></div>
      </section>
    )
  }

  return (
    <>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <FilterProvider>
              <Sidebar />
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </FilterProvider>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </>
  )
}
