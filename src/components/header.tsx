import { Link } from './link'
import logo from '../assets/logo.png'
import { ReactComponent as Menu } from '../assets/menu.svg'

function Header () {
  return (
    <header className='flex w-full items-center justify-between sm:flex-col sm:justify-center'>
      <div className='sm:mb-8'>
        <img src={logo} alt='Logo Mine'/>
      </div>

      <ul className='hidden sm:flex md:gap-2'>
        <li><Link title='Entrar' /></li>
        <li><Link title='Forum' /></li>
        <li><Link title='Sobre' /></li>
        <li><Link title='Mojang' /></li>
        <li><Link title='Perguntas' /></li>
      </ul>

      <div className='flex sm:hidden'>
        <button type='button' aria-label='toggle menu'>
          <Menu />
        </button>
      </div>
    </header>
  )
}

export { Header }
