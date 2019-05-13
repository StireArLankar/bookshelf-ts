const yearValidation = (value: string) => {
  const regexp = /^\d{4}$/
  return regexp.test(value)
}

export default yearValidation
