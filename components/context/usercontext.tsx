import React, { useContext, useState } from 'react'
import { links } from '../utils/constant'
// import { useAuth0 } from '@auth0/auth0-react'

type UserContextType = {
  isSidebar: boolean
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>
  // openSubmenu,
  location: {}
  link: any[]
  isSubmenu: boolean
  // closeSubmenu
  // isUser,
  // isLoading,
  // user,
  ref: {}
  setRef: React.Dispatch<React.SetStateAction<{}>>
}

const UserContext = React.createContext({} as UserContextType)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isSubmenu, setIsSubmenu] = useState(false)
  const [link, setLink] = useState([])
  const [location, setLocation] = useState({})
  const [ref, setRef] = useState({})

  // const { user, isAuthenticated, isLoading } = useAuth0()

  // const isUser = user && isAuthenticated

  // const openSubmenu = (center: number, bottom: number, text: string) => {
  //   setIsSubmenu(true)
  //   setLocation({ center, bottom })
  //   const page = links.find((item) => item.label === text)
  //   setLink(page.items)
  // }

  const closeSubmenu = () => {
    setIsSubmenu(false)
  }

  return (
    <UserContext.Provider
      value={{
        isSidebar,
        setIsSidebar,
        // openSubmenu,
        location,
        link,
        isSubmenu,
        // closeSubmenu,
        // isUser,
        // isLoading,
        // user,
        ref,
        setRef,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  return useContext(UserContext)
}

export default useUserContext
