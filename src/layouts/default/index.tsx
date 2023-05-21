import { Outlet } from 'react-router-dom'
import { Headear } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <main className="font-nunito">
      <Headear />
      <Outlet />
      <Footer />
    </main>
  )
}
