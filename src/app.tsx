import { Header } from './components/header'
import { Footer } from './components/footer'
import { Form } from './components/form'

function App () {
  return (
    <>
      <div className='bg-mine-background bg-no-repeat bg-cover h-full w-full fixed -z-10' />
      <div className='max-sm:backdrop-brightness-50 h-full w-full fixed z-0' />
      <main
        className='flex flex-col justify-between items-center py-10 z-10 px-6 relative'
      >
        <Header />

        <Form />

        <Footer />

      </main>
    </>
  )
}

export { App }
