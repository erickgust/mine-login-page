import { Header } from './components/header'
import { InfoContainer } from './components/info-container'
import { Input } from './components/input'

function App () {
  return (
    <main
      className='bg-mine-background bg-no-repeat bg-cover h-screen py-8
      flex flex-col justify-between items-center'
    >
      <Header />
      <InfoContainer/>

      <form>
        <Input
          title='E-mail'
          placeholder='iuricode@mail.com'
          type='email'
        />
      </form>
    </main>
  )
}

export { App }
