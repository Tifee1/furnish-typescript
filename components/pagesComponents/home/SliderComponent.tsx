import { useState } from 'react'

import {
  CustomNextArrow,
  CustomPaging,
  CustomPrevArrow,
} from '@/components/slider/CustomArrow'
import { sliderImages } from '@/components/utils/constant'
import Slider from 'react-slick'
import { Bounce, Fade } from 'react-awesome-reveal'
import SliderText from '@/components/slider/SliderText'

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (current: number) => {
    setCurrentSlide(current)
  }

  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    dotsClass: 'slick-img slick-thumb',
    infinite: true,
    speed: 2500,
    fade: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      handleSlideChange(newIndex)
    },
  }

  return (
    <>
      <section className='grid min-h-[calc(100vh-72px)] bg-[#d7bb3e] text-white tm:hidden'>
        <div className='absolute top-1/2 text-white grid items-center justify-center w-full text-center slider-text'>
          <h1 className='font-extrabold pb-6 slide-in-left'>
            Best Furniture Design
          </h1>
          <h3 className='font-semibold slide-in-right'>Available on Furnish</h3>
        </div>
      </section>
      <section className='hidden relative tm:block min-h-[calc(100vh-72px)]'>
        <Slider
          {...settings}
          customPaging={(i) => <CustomPaging index={i} onClick={() => {}} />}
        >
          {sliderImages.map((item, index) => {
            return (
              <SliderText
                key={index}
                item={item}
                currentSlide={currentSlide}
                index={index}
              />
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default SliderComponent
