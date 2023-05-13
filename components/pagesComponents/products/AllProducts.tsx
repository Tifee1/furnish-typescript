import { ProductType } from '@/components/types/typeDefinition'
import useFilterContext from '../../context/filtercontext'
import GridView from './GridView'
import ListView from './ListView'

type Props = {
  products: ProductType[]
  error: boolean
}

const AllProducts = ({ error, products }: Props) => {
  const { grid_view } = useFilterContext()

  if (error) {
    return <h3>oops,there was an error</h3>
  }

  if (products.length < 1) {
    return <h5>sorry no products matched your search</h5>
  }

  if (grid_view) {
    return <GridView products={products} />
  }

  if (!grid_view) {
    return <ListView products={products} />
  }

  return <></>
}
export default AllProducts
