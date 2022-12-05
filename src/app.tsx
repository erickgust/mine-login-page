import { Link } from './link'

function App() {
  return (
    <header className='bg-gray-800 h-56 box-border flex justify-center items-center'>
      <ul className='flex-row flex gap-2'>
        <li><Link title='Entrar' /></li>
        <li><Link title='Forum' /></li>
        <li><Link title='Sobre' /></li>
        <li><Link title='Mojang' /></li>
        <li><Link title='Perguntas' /></li>
      </ul>
    </header>
  )
}

export { App }
