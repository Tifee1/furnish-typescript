import FaqQuestion from '@/components/pagesComponents/faq/FaqQuestion'
import Hero from '@/components/layout/Hero'

import { faqItems } from '@/components/utils/constant'

const Faq = () => {
  return (
    <>
      <Hero title='FAQ' />
      <section className='py-12 px-6 md:bg-[url("/assets/dark_bg_img.png")] md:bg-cover md:bg-right-bottom md:min-h-[735px]'>
        <div className='md:w-[80%] max-w-[600px] md:max-w-7xl mx-auto md:mx-0'>
          <div className='text-center md:text-left'>
            <h2 className='font-[700] pb-6'>FAQ</h2>
            <p className='text-base tracking-wide text-black/50'>
              Lorem ipsum dolor, sit amet consect elit.
            </p>
          </div>
          <article className='mt-20'>
            {faqItems.map((item, index) => {
              return <FaqQuestion key={index} {...item} />
            })}
          </article>
        </div>
      </section>
    </>
  )
}
export default Faq
