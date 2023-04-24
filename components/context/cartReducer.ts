import { CartType, SingleProductType } from '../types/typeDefinition'
import { StateType } from './cartcontext'

type ActionType =
  | {
      type: 'ADD_TO_CART'
      payload: { amount: number; color: string; product: SingleProductType }
    }
  | {
      type: 'TOGGLE_AMOUNT'
      payload: { id: string; type: string; max: number }
    }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'UPDATE_TOTALS' }
  | { type: undefined }

const reducer = (state: StateType, action: ActionType): StateType => {
  if (action.type === 'ADD_TO_CART') {
    const { product, amount, color } = action.payload
    const { name, shipping, images, price, stock } = product
    const newId = product.id + color
    const exist = state.cart.find((c) => c.id === newId)
    let cart = [...state.cart]
    if (exist) {
      cart = state.cart.map((item) => {
        if (item.id === newId) {
          return { ...item, amount: item.amount + amount }
        }
        return { ...item }
      })
    } else {
      const newItem = {
        name,
        price,
        shipping,
        image: images[0].url,
        stock,
        id: newId,
        color,
        amount,
      }
      cart = [...state.cart, newItem]
    }
    return { ...state, cart }
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'inc') {
          let amount = item.amount + 1
          if (amount > action.payload.max) {
            amount = action.payload.max
          }
          return { ...item, amount }
        }
        if (action.payload.type === 'dec') {
          let amount = item.amount - 1
          if (amount < 1) {
            amount = 1
          }
          return { ...item, amount }
        }
      }
      return { ...item }
    })

    return { ...state, cart }
  }

  if (action.type === 'REMOVE_ITEM') {
    const cart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }

  if (action.type === 'UPDATE_TOTALS') {
    const { noOfItems, totalAmount, shippingFee } = state.cart.reduce(
      (total, curr) => {
        total.noOfItems += curr.amount
        total.totalAmount += curr.amount * curr.price
        if (!curr.shipping) {
          if (curr.amount < 9) {
            total.shippingFee = 0.13 * curr.price
          } else {
            total.shippingFee = 0.3 * curr.price
          }
        }
        return total
      },
      {
        noOfItems: 0,
        totalAmount: 0,
        shippingFee: 0,
      }
    )

    return { ...state, noOfItems, totalAmount, shippingFee }
  }

  throw new Error(`no matching '${action.type} action type`)
}

export default reducer
