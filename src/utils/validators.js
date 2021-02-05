export function validateEmptyAndLength (value) {
  if (!value) {
    return 'este campo é obrigatório'
  }

  if (value.length < 3) {
    return 'este campo precisa de no minimo 3 caracteres'
  }

  return true
}

export function validateEmptyEmail (value) {
  if (!value) {
    return 'este campo é obrigatório'
  }

  const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
  if (!isValid) {
    return 'endereço de e-mail invalido'
  }

  return true
}
