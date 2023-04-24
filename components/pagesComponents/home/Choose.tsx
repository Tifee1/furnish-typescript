import { chooseUs } from '@/components/utils/constant'

const Choose = () => {
  return (
    <section className='section'>
      <h2 className='font-[800] uppercase text-center'>why choose us</h2>
      <div className='underline'></div>
      <article className='grid items-center justify-center text-center w-[90vw] max-w-xl tm:grid-cols-3 tm:max-w-7xl tm:gap-6'>
        {chooseUs.map((item, index) => {
          return (
            <div key={index} className='my-6'>
              <span className='text-3xl text-[#062C4C] '>{item.icon}</span>
              <h3 className='mt-3 font-[600]'>{item.label}</h3>
              <p className='mt-3 text-base tracking-wide text-pry-500/75'>
                {item.text}
              </p>
            </div>
          )
        })}
      </article>
    </section>
  )
}
export default Choose
