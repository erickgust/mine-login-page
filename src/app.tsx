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

      <form className='px-9 py-6 bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-neutral-500/50 max-w-md w-full'>
        <div className='flex justify-center pb-2'>
          <img src='/mine.png' alt='Logo Mine' />
        </div>

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

        <button
          type='submit'
          className='
            font-semibold text-white text-xl rounded-md
            shadow-[0px_2px_0px_rgba(255,255,255),inset_0px_2px_0px_rgba(255,255,255,0.4)]
            w-full py-3 bg-gradient-to-r from-[#22AE75] to-[#00874F] my-8
          '
        >
          Entrar na conta
        </button>

        <a href='#'>
          <p className='text-emerald-400 text-center font-medium'>
            Esqueceu a senha?
          </p>
        </a>
      </form>

      <Footer />

    </main>
  )
}

export { App }
