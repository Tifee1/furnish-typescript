import Hero from '@/components/layout/Hero'
import { services } from '@/components/utils/constant'

const ServicesPage = () => {
  return (
    <>
      <Hero title='services' />
      <section className='py-12 px-6'>
        <h2 className='font-bold text-center'>our services</h2>
        <div className='underline'></div>
        <div className='grid im:grid-cols-2 tm:grid-cols-3 im:gap-8 mt-12 max-w-6xl mx-auto'>
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className='service relative mb-8 overflow-hidden'
              >
                <img src={item.img} alt={item.label} className='trans img' />
                <h2 className='h2 text-3xl w-full max-w-[500px] absolute bottom-0 bg-black/50 text-white text-center py-4 font-black tracking-widest'>
                  {item.label}
                </h2>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default ServicesPage
