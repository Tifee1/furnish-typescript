export type ProductType = {
  id: string
  name: string
  price: number
  image: string
  colors: string[]
  company: string
  description: string
  category: string
  shipping?: boolean
  featured?: boolean
}

export type SingleProductType = {
  id: string
  stock: number
  price: number
  shipping?: boolean
  images: { url: string; id: string }[]
  reviews: number
  stars: number
  name: string
  description: string
  company: string
  colors: string[]
}

export type CartType = {
  name: string
  price: number
  shipping?:boolean
  image: string
  stock: number
  id: string
  color: string
  amount: number
}
