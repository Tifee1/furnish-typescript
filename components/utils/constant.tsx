import { FaHome, FaRegQuestionCircle, FaAward } from 'react-icons/fa'
import { HiOutlineBookOpen, HiOutlineBriefcase } from 'react-icons/hi'
import { BsFillCreditCard2FrontFill, BsWallet } from 'react-icons/bs'
import {
  RiContactsFill,
  RiCustomerService2Line,
  RiPagesLine,
  RiExchangeDollarFill,
  RiTeamFill,
} from 'react-icons/ri'
import {
  MdOutlinePolicy,
  MdOutlineProductionQuantityLimits,
} from 'react-icons/md'
import { GrDiamond } from 'react-icons/gr'

export const links = [
  { label: 'home', url: '/', icon: <FaHome /> },
  {
    label: 'pages',
    url: '/',
    icon: <RiPagesLine />,
    items: [
      { name: 'about us', link: '/about', icon: <HiOutlineBookOpen /> },
      { name: 'contact', link: '/contact', icon: <RiContactsFill /> },
      { name: 'FAQ', link: '/faq', icon: <FaRegQuestionCircle /> },
      { name: 'privacy policy', link: '/privacy', icon: <MdOutlinePolicy /> },
    ],
  },
  { label: 'services', url: '/services', icon: <RiCustomerService2Line /> },
  {
    label: 'all products',
    url: '/products',
    icon: <MdOutlineProductionQuantityLimits />,
  },
]

export const chooseUs = [
  {
    label: 'best quality',
    icon: <GrDiamond />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: 'experienced',
    icon: <HiOutlineBriefcase />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: 'expert team',
    icon: <RiTeamFill />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: 'affordable services',
    icon: <BsWallet />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: '90 days guaranteed',
    icon: <RiExchangeDollarFill />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: 'award winning',
    icon: <FaAward />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
]

export const services = [
  { label: 'lighting', img: '/assets/lighting.png' },
  { label: 'interior design', img: '/assets/interior-design.png' },
  { label: 'floor planning', img: '/assets/floor-planning.png' },
  { label: 'furniture', img: '/assets/furniture.png' },
  { label: 'office furniture', img: '/assets/office-furniture.png' },
  { label: 'childRoom Furniture', img: '/assets/childroom-furniture.png' },
]

export const faqItems = [
  {
    que: 'Neque porro quisquam est, qui dolorem ipsum quia dolor consectetur',
    ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
  },
  {
    que: 'Sed ut perspiciatis unde omnis iste natus error sit dolor emque',
    ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
  },
  {
    que: 'At vero eos et accusamus et iusto odio dignissimos praesentium',
    ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
  },
  {
    que: 'Nam libero tempore, cum soluta nobis est eligend nihil impedit minus',
    ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
  },
  {
    que: 'But I must explain to you how all this mistaken idea',
    ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
  },
  {
    que: 'Nemo enim ipsam voluptatem quia voluptas sit',
    ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
  },
]
