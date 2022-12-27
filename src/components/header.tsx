import { Link } from './link'
import logo from '../assets/logo.png'

function Header () {
  return (
    <header className='flex flex-col justify-center items-center'>
      <div className='mb-8'>
        <img src={logo} alt='Logo Mine' />
      </div>

      <ul className='flex md:gap-2 gap-1'>
        <li><Link title='Entrar' /></li>
        <li><Link title='Forum' /></li>
        <li><Link title='Sobre' /></li>
        <li><Link title='Mojang' /></li>
        <li><Link title='Perguntas' /></li>
      </ul>
    </header>
  )
}

export { Header }
