import React, { useContext, useReducer, useRef, useEffect } from 'react'
import { CartType, SingleProductType } from '../types/typeDefinition'
import { getLocalStorage } from '../utils/helpers'
import reducer from './cartReducer'

export type StateType = {
  cart: CartType[]
  noOfItems: number
  totalAmount: number
  shippingFee: number
}

type ContextType = StateType & {
  addToMyCart: (
    amount: number,
    color: string,
    product: SingleProductType
  ) => void
  toggleAmount: (id: string, type: string, max: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const CartContext = React.createContext({} as ContextType)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: StateType = {
    cart: getLocalStorage('cart'),
    noOfItems: 0,
    totalAmount: 0,
    shippingFee: 0,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: 'UPDATE_TOTALS' })
  }, [state.cart])

  const addToMyCart = (
    amount: number,
    color: string,
    product: SingleProductType
  ) => {
    dispatch({ type: 'ADD_TO_CART', payload: { amount, color, product } })
  }

  const toggleAmount = (id: string, type: string, max: number) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type, max } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToMyCart,
        toggleAmount,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export default useCartContext
