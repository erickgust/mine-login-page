type LinkProps = {
  title: string
}

function Link ({ title }: LinkProps) {
  return (
    <a href='#' className='ease-linear duration-100 font-semibold text-white
    hover:text-emerald-400 uppercase py-2 px-6 hover:backdrop-blur-sm cursor-pointer
    hover:bg-white/30 rounded-md inline-block md:px-8'
    >
      {title}
    </a>
  )
}

export { Link }
