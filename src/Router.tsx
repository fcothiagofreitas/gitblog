import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { Home } from './pages/Home'
import { PostContent } from './pages/PostContent'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostContent />} />
      </Route>
    </Routes>
  )
}
