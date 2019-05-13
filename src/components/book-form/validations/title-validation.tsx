const titleValidation = (value: string) => {
  const regexp = /[A-Z]/gi
  return regexp.test(value)
}

export default titleValidation
