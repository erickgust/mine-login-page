import { Header } from './components/header'
import { Footer } from './components/footer'
import { Form } from './components/form'

function App () {
  return (
    <>
      <div className='
        bg-mine-background bg-no-repeat bg-cover
        min-h-screen w-full fixed
        max-sm:after:bg-neutral-900/75 after:min-h-screen after:w-full after:fixed
      '/>
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
