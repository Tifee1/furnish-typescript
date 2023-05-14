import { ProductType } from '../types/typeDefinition'

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(price / 100)
}

export const uniqueValues = (
  arr: ProductType[],
  val: keyof ProductType,
  select?: boolean
): string[] => {
  if (select) {
    return ['all', ...new Set(arr.map((item) => item.colors).flat())]
  }
  const firstMap = arr.map((item) => item[val]) as string[]
  const secondMap = [...new Set(firstMap)]
  return ['all', ...secondMap]
}

export const getLocalStorage = <CartType>(type: string): CartType[] => {
  if (typeof window !== 'undefined') {
    let storage = localStorage.getItem(type)
    if (!storage) {
      storage = JSON.stringify([])
    }
    return JSON.parse(storage) as CartType[]
  }
  return []
}
