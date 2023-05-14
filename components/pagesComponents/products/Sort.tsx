import { ProductType } from '@/components/types/typeDefinition'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import useFilterContext from '../../context/filtercontext'

type Props = {
  products: ProductType[]
}

const Sort = ({ products }: Props) => {
  const { grid_view, setGridView, setListView, sort, changeSort } =
    useFilterContext()

  return (
    <section className='grid grid-cols-[1fr] im:grid-cols-[auto_auto_1fr_auto] items-center px-4 mb-8 gap-y-3 im:gap-y-0 im:gap-x-8 im-mb-8'>
      <div className='!w-[50px] im:w-auto grid grid-cols-2 gap-x-2'>
        <button
          className={`border border-black bg-transparent h-6 w-6 flex items-center justify-center rounded-[0.25rem] cursor-pointer text-base ${
            grid_view && '!bg-black text-white'
          }`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`border border-black bg-transparent h-6 w-6 flex items-center justify-center rounded-[0.25rem] cursor-pointer text-base ${
            !grid_view && '!bg-black text-white'
          }`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p className='capitalize tm:mb-0'>{products.length} products found</p>
      <hr className='border-black' />
      <div>
        <form className='flex items-center justify-center max-w-[200px]'>
          <label htmlFor='sort' className='text-base capitalize'>
            sort by
          </label>
          <select
            name='sort'
            id='sort'
            className='bg-transparent border-transparent text-base capitalize py-1 px-2'
            value={sort}
            onChange={(e) => changeSort(e.target.value)}
          >
            <option value='a-z'>a-z</option>
            <option value='z-a'>z-a</option>
            <option value='p-lowest'>price (lowest)</option>
            <option value='p-highest'>price (highest)</option>
          </select>
        </form>
      </div>
    </section>
  )
}
export default Sort
