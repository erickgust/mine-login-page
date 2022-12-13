function CheckboxInput ({ label }: { label: string}) {
  return (
    <div className='form-check flex items-center'>
      <input
        type='checkbox'
        name='remember'
        id='remember'
        className='
          mr-3 h-4 w-4 appearance-none border border-neutral-700 rounded
          bg-neutral-800 cursor-pointer form-check-input checked:bg-neutral-800
          checked:border-neutral-700
        '
      />
      <label
        htmlFor='remember'
        className='
          form-check-label inline-block select-none text-white font-["Inter"]
          text-sm
        '
      >
        {label}
      </label>
    </div>
  )
}

export { CheckboxInput }
