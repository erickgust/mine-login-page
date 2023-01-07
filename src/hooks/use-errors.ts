import { useState } from 'react'

type Error = {
  field: string
  message: string
}

function useErrors () {
  const [errors, setErrors] = useState<Error[]>([])

  function setError ({ field, message }: Error) {
    const errorAlreadyExists = errors.find(error => error.field === field)

    if (errorAlreadyExists) return

    setErrors(errors => [...errors, { field, message }])
  }

  function removeError (field: string) {
    setErrors(errors => errors.filter(error => error.field !== field))
  }

  function getErrorMessageByFieldName (field: string) {
    const error = errors.find(error => error.field === field)

    return error?.message
  }

  return { setError, removeError, getErrorMessageByFieldName }
}

export { useErrors }
