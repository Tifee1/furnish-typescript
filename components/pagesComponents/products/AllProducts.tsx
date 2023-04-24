import useFilterContext from '../../context/filtercontext'
import GridView from './GridView'
import ListView from './ListView'

const AllProducts = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

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
