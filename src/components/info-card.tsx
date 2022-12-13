import { ReactNode } from 'react'

type InfoCardProps = {
  logo: ReactNode
  title: string
}

function InfoCard ({ logo, title }: InfoCardProps) {
  return (
    <article className='inline-flex flex-col items-center'>
      {logo}

      <span className='font-normal text-lg text-white mt-3 inline-block'>
        {title}
      </span>
      </article>
  )
}

export { InfoCard }
