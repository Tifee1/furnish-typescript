import { ProductType, SingleProductType } from '../types/typeDefinition'
import { StateType } from './productcontext'

type ActionType =
  | { type: 'SET_LOADING' }
  | { type: 'SET_DATA'; payload: ProductType[] }
  | { type: 'SET_ERROR' }
  | { type: 'SET_SINGLE_LOADING' }
  | { type: 'SET_SINGLE_PRODUCT'; payload: SingleProductType }
  | { type: 'SET_SINGLE_ERROR' }
  | { type: undefined }

const reducer = (state: StateType, action: ActionType): StateType => {
  if (action.type === 'SET_LOADING') {
    return { ...state, loading: true, error: false }
  }
  if (action.type === 'SET_DATA') {
    return { ...state, products: action.payload, loading: false }
  }
  if (action.type === 'SET_ERROR') {
    return { ...state, error: true, loading: false }
  }
  if (action.type === 'SET_SINGLE_LOADING') {
    return { ...state, singleLoading: true, singleError: false }
  }
  if (action.type === 'SET_SINGLE_PRODUCT') {
    return { ...state, singleProduct: action.payload, singleLoading: false }
  }
  if (action.type === 'SET_SINGLE_ERROR') {
    return { ...state, singleError: true, singleLoading: false }
  }
  throw new Error(`no matching '${action.type}' action type`)
}

export default reducer
