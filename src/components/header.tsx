import { useState } from 'react'

import { Link } from './link'
import { ModalMobile } from './modal-mobile'

import logo from '../assets/logo.png'
import { ReactComponent as Menu } from '../assets/menu.svg'

function Header () {
  const [isOpen, setIsOpen] = useState(false)

  function handleModalOpen () {
    setIsOpen(true)
  }

  function handleModalClose () {
    setIsOpen(false)
  }

  return (
    <header className='flex w-full items-center justify-between sm:flex-col sm:justify-center'>
      <div className='sm:mb-8'>
        <img src={logo} alt='Logo Mine' className='max-sm:h-11'/>
      </div>

      <ul className='hidden sm:flex md:gap-2'>
        <li><Link title='Entrar' /></li>
        <li><Link title='Forum' /></li>
        <li><Link title='Sobre' /></li>
        <li><Link title='Mojang' /></li>
        <li><Link title='Perguntas' /></li>
      </ul>

      <div className='flex sm:hidden'>
        <button type='button' aria-label='toggle menu' onClick={handleModalOpen}>
          <Menu />
        </button>

        <ModalMobile isOpen={isOpen} onClose={handleModalClose}>
          <ul className='flex flex-col gap-4'>
            <li><Link title='Entrar' /></li>
            <li><Link title='Forum' /></li>
            <li><Link title='Sobre' /></li>
            <li><Link title='Mojang' /></li>
            <li><Link title='Perguntas' /></li>
          </ul>
        </ModalMobile>
      </div>
    </header>
  )
}

export { Header }
