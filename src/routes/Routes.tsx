import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { DefaultLayouts } from '../component/Layouts/DefaultLayout'
import { Issue } from '../pages/Issue/Issue'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Issue />} />
        <Route path="/issue/:id" element={<Issue />} />
      </Route>
    </Routes>
  )
}
