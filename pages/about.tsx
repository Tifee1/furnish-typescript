import Hero from '@/components/layout/Hero'

const About = () => {
  return (
    <>
      <Hero title='about us' />
      <main className='page'>
        <section className='py-12 px-6 md:bg-[url("/assets/dark_bg_img.png")] md:bg-cover md:bg-center md:min-h-[735px]'>
          <div className='text-center md:text-left'>
            <h2 className='font-[700] pb-6'>who we are</h2>
            <p className='text-base tracking-wide text-black/50'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className='text-base tracking-wide md:w-[70%] text-black/50'>
            <br /> Incidunt molestias magni esse placeat, eveniet dolorem
            assumenda alias dolorum cupiditate tempora aliquid, voluptate ipsa
            delectus sunt officiis, sequi consequuntur quas corporis vel.
            Dolores repellat, veniam obcaecati laudantium officia ipsum rerum
            reiciendis ab magni cumque repellendus qui deleniti omnis, molestiae
            architecto animi exercitationem illum sapiente quibusdam dolorum.
            Corrupti magni incidunt consequuntur. <br /> <br /> Vitae sunt
            molestias veritatis maiores placeat neque vero architecto, libero ab
            excepturi officia cupiditate deserunt omnis. Nesciunt optio libero
            perspiciatis placeat, minima tempore dolorum culpa non consectetur
            nobis minus error est unde animi sit inventore expedita quisquam
            magni consequuntur officiis, alias quae incidunt? A ratione incidunt
            beatae architecto aliquam iure fugiat laudantium ea tempora modi,
            eos doloribus inventore ex! Praesentium ea dolorem, rerum,
            perferendis, facere velit adipisci ipsa voluptatibus libero
            voluptatum soluta. Hic nulla nesciunt vero veritatis eaque illum
            nihil dolorem.
          </p>
        </section>
      </main>
    </>
  )
}
export default About
