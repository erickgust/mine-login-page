type LinkProps = {
  title: string
}

function Link ({ title }: LinkProps) {
  return (
    <a href="#" className='ease-linear duration-100 font-semibold text-white
    hover:text-emerald-400 uppercase py-2 px-8 hover:backdrop-blur-sm cursor-pointer
    hover:bg-white/30 rounded-md inline-block'
    >
      {title}
    </a>
  )
}

export { Link }
