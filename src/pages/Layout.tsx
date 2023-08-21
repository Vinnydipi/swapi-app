import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MainNavigation from '../components/navigation/MainNavigation'
import { RootState } from '../store/reduxStore'
import Header from '../components/header/Header'

const Layout: React.FC = () => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  return (
    <>
      {loggedIn && <Header />}
      {loggedIn && <MainNavigation /> }
      <Outlet />
    </>
  )
}

export default Layout;