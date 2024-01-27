import { Outlet } from 'react-router'
import { Header } from '../Header/Header'

export const DefaultLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
