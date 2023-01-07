type InputProps = {
  title: string
  placeholder: string
  type: 'email' | 'password'
  error?: string
  value: string
  onChange: (value: string) => void
}

function Input ({ title, placeholder, type, error, value, onChange }: InputProps) {
  return (
    <div className='mb-6'>
      <label className='text-white font-medium block pb-1' htmlFor={type}>{title}</label>
      <input
        className={`
          bg-neutral-800 py-2 px-4 rounded border border-neutral-700 text-sm
          placeholder:text-slate-400 text-white font-["Inter"] w-full
            outline-none focus:border-emerald-400  transition-colors duration-150
            ${!!error && 'focus:border-red-500 border-red-500 text-red-400'}
        `}
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {!!error && <small className='text-red-400 font-medium mt-1 block'>{error}</small>}
    </div>
  )
}

export { Input }
