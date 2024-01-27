import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { DefaultLayouts } from '../component/Layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Home />} />
      </Route>
    </Routes>
  )
}
