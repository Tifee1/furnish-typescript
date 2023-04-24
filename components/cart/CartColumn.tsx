const CartColumn = () => {
  return (
    <div className='hidden tm:block mb-12'>
      <div className='bg-pry-500 py-[18px] grid grid-cols-[316px_1fr_1fr_1fr_auto] justify-center gap-x-4 text-center text-white font-semibold capitalize tracking-wider'>
        <h4>product</h4>
        <h4>price</h4>
        <h4>quantity</h4>
        <h4>subtotal</h4>
      </div>
    </div>
  )
}
export default CartColumn
