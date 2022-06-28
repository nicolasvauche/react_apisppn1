import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='app-header'>
      <nav className='app-navigation'>
        <NavLink to='/'>Accueil</NavLink> | 
        <NavLink to='/posts'>Posts</NavLink>
      </nav>
    </header>
  )
}

export default Header
