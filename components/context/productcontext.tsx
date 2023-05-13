import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'

import { ProductType, SingleProductType } from '../types/typeDefinition'

import reducer from './productreducer'

type ProductContextType = StateType & {
  fetchSingleProduct: (id: string) => Promise<void>
}

const ProductContext = React.createContext({} as ProductContextType)

export type StateType = {
  products: ProductType[]
  loading: boolean
  error: boolean
  singleProduct: SingleProductType
  singleLoading: boolean
  singleError: boolean
}
const initialState: StateType = {
  products: [],
  loading: false,
  error: false,
  singleProduct: {} as SingleProductType,
  singleLoading: false,
  singleError: false,
}

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async (url: string) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const resp = await axios(url)
      const tempData: ProductType[] = await resp.data
      const data = tempData.map((item) => {
        return { ...item, price: item.price * 420 }
      })

      dispatch({ type: 'SET_DATA', payload: data })
    } catch (error) {
      dispatch({ type: 'SET_ERROR' })
    }
  }

  const fetchSingleProduct = async (id: string) => {
    dispatch({ type: 'SET_SINGLE_LOADING' })
    try {
      const resp = await axios(
        `https://course-api.com/react-store-single-product?id=${id}`
      )
      const temp: SingleProductType = await resp.data
      const data = { ...temp, price: temp.price * 420 }
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: data })
    } catch (error) {
      dispatch({ type: 'SET_SINGLE_ERROR' })
    }
  }

  useEffect(() => {
    fetchData('https://course-api.com/react-store-products')
  }, [])

  return (
    <ProductContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProductContext = () => {
  return useContext(ProductContext)
}

export default useProductContext
