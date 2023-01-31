import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom'

// pages
import { Create, Read } from '../pages';

// paths
import { PATHS } from './paths';

// ::
const AppRoutes = () => {
  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') document.documentElement.classList.remove('dark')
  }, [])

  return (
    <Routes>
      <Route path="*" element={<Create />} />
      <Route path={PATHS.create} element={<Create />} />
      <Route path={PATHS.read} element={<Read />}>
        <Route path=":id" />
      </Route>
    </Routes>
  )
}

export default AppRoutes