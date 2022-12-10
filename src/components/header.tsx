import { Link } from './link'
import logo from '../assets/logo.png'

function Header () {
  return (
    <header className='flex flex-col justify-center items-center'>
      <div className='mb-4'>
        <img src={logo} alt="Logo Mine" />
      </div>

      <ul className='flex gap-2'>
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
