import { Route, Routes } from 'react-router-dom'

// pages
import { Create, Read } from '../pages';

// paths
import { PATHS } from './paths';

// ::
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.create} element={<Create />} />
      <Route path={PATHS.read} element={<Read />}>
        <Route path=":id" />
      </Route>
    </Routes>
  )
}

export default AppRoutes