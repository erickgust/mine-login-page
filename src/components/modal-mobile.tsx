import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ReactComponent as CloseIcon } from '@/assets/close.svg'

type ModalProps = {
  isOpen: boolean
  children: React.ReactNode | React.ReactNode[]
  onClose: () => void
}

function ModalMobile ({ isOpen, children, onClose }: ModalProps) {
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

  if (!isOpen) return null

  return createPortal((
    <div onClick={onClose} className='
      fixed inset-0 z-50 flex sm:hidden
      bg-black/60 backdrop-blur-sm
    '>
      <div
        onClick={e => e.stopPropagation()}
        className='bg-neutral-900 px-6 py-24 max-w-xs w-full relative shadow-lg ml-auto'
      >
        {children}
        <button
          onClick={onClose}
          className='absolute top-10 right-6 p-2 rounded-xl bg-neutral-700/50'
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  ), document.body)
}

export { ModalMobile }
