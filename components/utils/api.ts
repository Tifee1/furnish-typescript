import axios from 'axios'
import { ProductType, SingleProductType } from '../types/typeDefinition'

export const getProducts = async () => {
  // dispatch({ type: 'SET_LOADING' })
  const resp = await axios('https://course-api.com/react-store-products')
  const tempData: ProductType[] = await resp.data
  const data = tempData.map((item) => {
    return { ...item, price: item.price * 420 }
  })

  return data
}

export const getFeaturedProducts = async () => {
  const products = await getProducts()
  return products.filter((item) => item.featured === true)
}

export const fetchSingleProduct = async (id: string) => {
  //  dispatch({ type: 'SET_SINGLE_LOADING' })
  const resp = await axios(
    `https://course-api.com/react-store-single-product?id=${id}`
  )
  const temp: SingleProductType = await resp.data
  return { ...temp, price: temp.price * 420 }
}
