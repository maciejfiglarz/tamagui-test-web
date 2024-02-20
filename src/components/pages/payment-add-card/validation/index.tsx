import isCreditCard from 'validator/lib/isCreditCard'

const isCreditCardValid = (creditCard: string) => {
  return isCreditCard(creditCard)
}

function isCreditCardExpirationDateValid(expirationDate: string) {
  const datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/

  if (!datePattern.test(expirationDate)) {
    return false
  }

  const [month, year] = expirationDate.split('/')
  const currentYear = new Date().getFullYear() % 100
  const currentMonth = new Date().getMonth() + 1

  if (Number(year) < currentYear || (Number(year) === currentYear && Number(month) < currentMonth)) {
    return false
  }

  return true
}

const isCvvValid = (cvv: string) => {
  const cvvRegex = /^[0-9]{3,4}$/
  return cvvRegex.test(cvv)
}

export { isCreditCardValid, isCreditCardExpirationDateValid, isCvvValid }
