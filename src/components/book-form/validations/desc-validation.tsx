const descValidation = (value: string) => {
  const regexp = /[A-Z]/gi
  return regexp.test(value)
}

export default descValidation
