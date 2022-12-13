import { Header } from './components/header'
import { Footer } from './components/footer'
import { Input } from './components/input'

function App () {
  return (
    <main
      className='bg-mine-background bg-no-repeat bg-cover h-screen py-8
      flex flex-col justify-between items-center'
    >
      <Header />

      <form>
        <Input
          title='E-mail'
          placeholder='iuricode@mail.com'
          type='email'
        />
      </form>

      <Footer />

    </main>
  )
}

export { App }
