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
      className={className}
      style={{
        ...style,
        display: 'block',
        top: '50%',
        left: '0', // Set right property to 0
        transform: 'translateY(-50%)',
        color: '#fff',
        fontSize: '26px',
        padding: '0 20px',
        borderRadius: '50%',
        width: '4rem',
        height: '4rem',
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
      className={className}
      style={{
        ...style,
        display: 'block',
        top: '50%',
        right: '0', // Set right property to 0
        transform: 'translateY(-50%)',
        color: '#fff',
        fontSize: '26px',
        padding: '0 20px',
        borderRadius: '50%',
        width: '4rem',
        height: '4rem',
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
