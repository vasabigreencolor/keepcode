export const stringRules = (message: string) => [
  (value: string) => {
    if (value) return true

    return message
  }
]

export const emailRules = (message: string) => [
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true
    return message
  }
]