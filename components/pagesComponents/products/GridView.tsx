import { ProductType } from '../../types/typeDefinition'
import DisplayProducts from './DisplayProducts'

type Props = {
  products: ProductType[]
}

const GridView = ({ products }: Props) => {
  return (
    <section className='grid gap-x-8 gap-y-6 md:grid-cols-2 xl:grid-cols-3'>
      {products.map((product) => {
        return <DisplayProducts key={product.id} {...product} />
      })}
    </section>
  )
}
export default GridView
