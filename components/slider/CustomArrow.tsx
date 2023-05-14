import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { CustomArrowProps } from 'react-slick'
import { sliderImages } from '../utils/constant'

interface CustomPagingProps {
  index: number
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export const CustomPrevArrow = ({
  className,
  style,
  onClick,
}: CustomArrowProps) => {
  return (
    <button
      className='slick-my-prev text-2xl'
      style={{
        ...style,
        left: '0',
        marginLeft: '6px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  )
}
export const CustomNextArrow = ({
  className,
  style,
  onClick,
}: CustomArrowProps) => {
  return (
    <button
      className='slick-my-next text-2xl'
      style={{
        right: '0',
        marginRight: '6px',
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </button>
  )
}

export const CustomPaging: React.FC<CustomPagingProps> = ({
  index,
  onClick,
}) => {
  return (
    <a onClick={onClick}>
      <img src={sliderImages[index]} />
    </a>
  )
}
