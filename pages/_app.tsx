import { CartProvider } from '@/components/context/cartcontext'
import { FilterProvider } from '@/components/context/filtercontext'
import { ProductProvider } from '@/components/context/productcontext'
import { UserProvider } from '@/components/context/usercontext'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
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
