type Props = {
  currentSlide: number
  index: number
  item: string
}

const SliderText = ({ currentSlide, index, item }: Props) => {
  return (
    <>
      <div className={`mt-2 ${currentSlide === index && 'bannerTime'}`}></div>
      <div className='h-full relative overflow-hidden' key={index}>
        <img
          src={item}
          alt={`bg-image-${index}`}
          className={`bg-center bg-cover bg-no-repeat  ${
            currentSlide === index && 'scale-image'
          }`}
        />

        <div className='absolute top-1/2 text-white grid items-center justify-center w-full text-center slider-text'>
          <h1
            className={`font-extrabold pb-6  ${
              currentSlide === index && 'slide-in-left'
            }`}
          >
            Best Furniture Design
          </h1>
          <h3
            className={`font-semibold  ${
              currentSlide === index && 'slide-in-right'
            }`}
          >
            Available on Furnish
          </h3>
        </div>
      </div>
    </>
  )
}

export default SliderText
