import React, { useReducer, useEffect, useContext } from 'react'
import { ProductType } from '../types/typeDefinition'
import reducer from './filterReducer'
import useProductContext from './productcontext'

export type StateType = {
  loading: boolean
  all_products: ProductType[]
  filtered_products: ProductType[]
  grid_view: boolean
  sort: string
  filters: {
    search: string
    category: string
    company: string
    color: string
    price: number
    maxPrice: number
    shipping: boolean
  }
}

type FilterContextType = StateType & {
  setGridView: () => void
  setListView: () => void
  changeFilter: ({
    name,
    value,
  }: {
    name: string
    value: string | boolean
  }) => void
  clearFilters: () => void
  changeSort: (value: string) => void
}

const FilterContext = React.createContext({} as FilterContextType)

const initialState: StateType = {
  loading: false,
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'p-lowest',
  filters: {
    search: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    maxPrice: 0,
    shipping: false,
  },
}

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const { products } = useProductContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    dispatch({ type: 'SET_FILTERS' })
    dispatch({ type: 'SORT' })
  }, [state.filters, state.sort])

  const setGridView = () => {
    dispatch({ type: 'SET_GRIDVIEW' })
  }
  const setListView = () => {
    dispatch({ type: 'SET_LISTVIEW' })
  }

  const changeSort = (value: string) => {
    dispatch({ type: 'CHANGE_SORT', payload: value })
  }

  const changeFilter = ({
    name,
    value,
  }: {
    name: string
    value: string | boolean
  }) => {
    dispatch({ type: 'CHANGE_FILTER', payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        changeFilter,
        clearFilters,
        changeSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}

export default useFilterContext
