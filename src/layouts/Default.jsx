import Header from './Header'
import Footer from './Footer'
import Homepage from '../pages/Home'
import Login from '../pages/Login'
import Post from '../pages/Post'

const Layout = ({ page }) => {
  return (
    <>
      <Header />

      <main className='app-main'>
        {page === 'home' && <Homepage />}
        {page === 'login' && <Login />}
        {page === 'post' && <Post />}
      </main>

      <Footer />
    </>
  )
}

export default Layout
