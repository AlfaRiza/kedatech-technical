import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

declare interface LayoutsInterface {
  children: ReactNode
  onClick: () => void
}

const Layouts = ({ children, onClick }: LayoutsInterface) => {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Navbar onClick={() => {onClick()}} />
      {children}
      <Footer />
    </div>
  )
}

export default Layouts
