type InputProps = {
  title: string
  placeholder: string
  type: 'email' | 'password'
}

function Input ({ title, placeholder, type }: InputProps) {
  return (
    <>
      <label className='text-white font-medium block pb-1' htmlFor={type}>{title}</label>
      <input
        className='
          bg-neutral-800 py-2 px-4 rounded border border-neutral-700 text-sm
          placeholder:text-slate-400 text-white font-["Inter"] mb-6 w-full
        '
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
      />
    </>
  )
}

export { Input }
