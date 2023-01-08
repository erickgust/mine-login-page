import { useErrors } from '@/hooks/use-errors'
import { isEmailValid } from '@/utils/isEmailValid'
import { useState } from 'react'
import { CheckboxInput } from './checkbox-input'
import { Input } from './input'
import { Modal } from './modal'

function Form () {
  const [isOpen, setIsOpen] = useState(false)
  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = !!(email && password && errors.length === 0)

  function handleEmailChange (value: string) {
    setEmail(value)

    if (value && !isEmailValid(value)) {
      setError({ field: 'email', message: 'E-mail inválido' })
    } else {
      removeError('email')
    }
  }

  function handlePasswordChange (value: string) {
    setPassword(value)

    if (value && value.length < 6) {
      setError({ field: 'password', message: 'Senha muito curta' })
    } else {
      removeError('password')
    }
  }

  function handleModalClose () {
    setIsOpen(false)
  }

  function handleModalOpen () {
    setIsOpen(true)
  }

  function handleSubmit (event: React.FormEvent) {
    event.preventDefault()

    if (isFormValid) {
      handleModalOpen()
    }
  }

  return (
    <form onSubmit={handleSubmit} className='my-12 px-9 py-6 bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-neutral-500/50 max-w-md w-full'>
      <div className='flex justify-center pb-2'>
        <img src='/mine.png' alt='Logo Mine' />
      </div>

      <Input
        title='E-mail'
        placeholder='iuricode@mail.com'
        type='email'
        error={getErrorMessageByFieldName('email')}
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        title='Senha'
        placeholder='0123456789'
        type='password'
        error={getErrorMessageByFieldName('password')}
        value={password}
        onChange={handlePasswordChange}
      />

      <CheckboxInput label='Lembrar minha senha' />

      <button
        type='submit'
        className='
          font-semibold text-white text-xl rounded-md
          shadow-[0px_2px_0px_rgba(255,255,255),inset_0px_2px_0px_rgba(255,255,255,0.4)]
          w-full py-3 bg-[#22AE75] my-8 transition-all duration-150 cursor-pointer
          active:brightness-75 disabled:bg-neutral-600 disabled:cursor-not-allowed
        '
        disabled={!isFormValid}
      >
        Entrar na conta
      </button>

      <a href='#'>
        <p className='text-emerald-400 text-center font-medium'>
          Esqueceu a senha?
        </p>
      </a>

      <Modal isOpen={isOpen} onClose={handleModalClose} />
    </form>
  )
}

export { Form }
