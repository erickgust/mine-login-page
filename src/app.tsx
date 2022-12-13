import { Header } from './components/header'
import { Footer } from './components/footer'
import { Input } from './components/input'
import { CheckboxInput } from './components/checkbox-input'

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
        <Input
          title='Senha'
          placeholder='0123456789'
          type='password'
        />

        <CheckboxInput label='Lembrar minha senha' />
      </form>

      <Footer />

    </main>
  )
}

export { App }
