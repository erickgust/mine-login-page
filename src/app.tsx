import { Link } from './link'

function App() {
  return (
    <main className='bg-mine-background bg-no-repeat bg-cover h-screen'>
      <header className='flex justify-center items-center'>
        <ul className='flex gap-2'>
          <li><Link title='Entrar' /></li>
          <li><Link title='Forum' /></li>
          <li><Link title='Sobre' /></li>
          <li><Link title='Mojang' /></li>
          <li><Link title='Perguntas' /></li>
        </ul>
      </header>
    </main>
  )
}

export { App }
