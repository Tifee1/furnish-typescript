import { ProductType } from '@/components/types/typeDefinition'
import { FaCheck } from 'react-icons/fa'
import useFilterContext from '../../context/filtercontext'
import { formatPrice, uniqueValues } from '../../utils/helpers'

type Props = {
  products: ProductType[]
}

const FilterProducts = ({ products }: Props) => {
  const { filters, changeFilter, clearFilters } = useFilterContext()

  const { price, maxPrice, search, company, category, shipping, color } =
    filters

  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Search */}
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Search...'
            name='search'
            className='border border-yel rounded-md px-3 py-1'
            value={search}
            onChange={(e) =>
              changeFilter({ name: e.target.name, value: e.target.value })
            }
          />
        </div>
        {/* Category */}
        <div className='mb-4'>
          <h3 className='my-2 font-semibold'>category</h3>
          {uniqueValues(products, 'category').map((item, index) => {
            return (
              <button
                className={`block border border-yel px-2 py-1 mb-2 rounded-md capitalize tracking-wider ${
                  item === category && 'bg-yel text-white'
                }`}
                key={index}
                value={item}
                onClick={() =>
                  changeFilter({
                    name: 'category',
                    value: item,
                  })
                }
              >
                {item}
              </button>
            )
          })}
        </div>

        {/* company */}

        <div className='mb-4'>
          <h3 className='my-2 font-semibold'>company</h3>
          <select
            name='company'
            value={company}
            className='bg-transparent border border-yel px-2 py-1 rounded-md'
            onChange={(e) =>
              changeFilter({ name: e.target.name, value: e.target.value })
            }
          >
            {uniqueValues(products, 'company').map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>

        {/* colors */}
        <div className='mb-4'>
          <h3 className='my-2 font-semibold'>colors</h3>
          <div className='flex items-center'>
            {uniqueValues(products, 'colors', true).map((item, index) => {
              if (item === 'all') {
                return (
                  <button
                    key={index}
                    className={`border border-slate-700 text-slate-700 py-1 px-2 mr-2 rounded-md capitalize ${
                      item === color && 'bg-slate-700 !text-white/70'
                    }`}
                    onClick={(e) =>
                      changeFilter({ name: 'color', value: item })
                    }
                  >
                    {item}
                  </button>
                )
              }
              return (
                <button
                  key={index}
                  className='w-5 h-5 rounded-full mr-2 flex items-center justify-center'
                  style={{ background: item, opacity: '0.6' }}
                  onClick={() => changeFilter({ name: 'color', value: item })}
                >
                  <span className='text-[0.5rem] text-white'>
                    {item === color && <FaCheck />}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
        {/* price */}

        <div className='mb-4'>
          <h3 className='my-2 font-semibold'>price</h3>
          <p>{formatPrice(price)}</p>
          <input
            type='range'
            value={price}
            min={0}
            max={maxPrice}
            onChange={(e) =>
              changeFilter({ name: 'price', value: e.target.value })
            }
          />
        </div>

        {/* shipping */}
        <div className='mb-4 grid grid-cols-[auto_1fr] max-w-[200px] gap-x-2 items-center text-base'>
          <label htmlFor='shipping' className='capitalize'>
            free shipping
          </label>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={(e) =>
              changeFilter({ name: 'shipping', value: e.target.checked })
            }
          />
        </div>
        <div className='mb-4'>
          <button
            className='trans bg-yel text-white px-2 py-1 capitalize tracking-wider rounded-md hover:bg-yel/80'
            onClick={clearFilters}
          >
            clear filters
          </button>
        </div>
      </form>
    </section>
  )
}
export default FilterProducts
