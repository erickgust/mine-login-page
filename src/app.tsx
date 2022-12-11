import { Header } from './components/header'
import { InfoContainer } from './components/info-container'

function App () {
  return (
    <main
      className='bg-mine-background bg-no-repeat bg-cover h-screen py-8
      flex flex-col justify-between items-center'
    >
      <Header />
      <InfoContainer/>
    </main>
  )
}

export { App }
