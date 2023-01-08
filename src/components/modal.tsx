import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ReactComponent as Checked } from '@/assets/checked.svg'
import { ReactComponent as CloseIcon } from '@/assets/close.svg'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

function Modal ({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    function handleEscape (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    const timeout = setTimeout(() => {
      onClose()
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal((
    <div onClick={onClose} className='
      fixed inset-0 z-50 flex items-center justify-center
      bg-black/60 backdrop-blur-sm
    '>
      <div
        onClick={e => e.stopPropagation()}
        className='bg-neutral-900 rounded-xl p-6 max-w-xs w-full relative shadow-lg'
      >
        <div className='flex justify-center h-20 mb-4'>
          <Checked />
        </div>
        <h2 className='text-white font-medium text-center text-lg mb-4'>
          Cadastro realizado com sucesso!
        </h2>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 p-2 rounded-xl bg-neutral-700/50'
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  ), document.body)
}

export { Modal }
