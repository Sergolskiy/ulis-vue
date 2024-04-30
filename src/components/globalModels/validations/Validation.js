
export class Validation {

  constructor(validationItems, validationOptions) {
    this.validationItems = validationItems
    this.validationOptions = validationOptions

    this.validation = {}
    this.validationTranslate = {}
  }

  setValidationData(validationItems, validationOptions) {
    this.validationItems = validationItems
    this.validationOptions = validationOptions
  }

  startValidation() {

    let validation = []
    let validationError = []
    let isValidate = true

    Object.keys(this.validationOptions).map((item) => {

      if (Object.prototype.hasOwnProperty.call(this.validationItems, item)) {

        this.validationOptions[item].type.map((type) => {

          switch (true) {
            case type === 'empty':
              if (!fieldEmpty(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_required']
                isValidate = false
              }
              break

            case type === 'empty-array':
              if (!emptyArray(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_required']
                isValidate = false
              }
              break

            case type === 'email':
              if (!fieldEmail(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_email']
                isValidate = false
              }
              break

            case type === 'phone':
              if (!fieldPhone(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_phone']
                isValidate = false
              }
              break

            case type === 'password':
              if (!fieldPassword(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_password']
                isValidate = false
              }
              break

            case type === 'numeric':
              if (!fieldNumbers(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_numeric']
                isValidate = false
              }
              break

            case type === 'not-zero':
              if (!fieldNotZero(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['common_MoreThanZero']
                isValidate = false
              }
              break

            case type === 'not-negative':
              if (!fieldNotNegativeNumber(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['common_notNegativeNumber']
                isValidate = false
              }
              break

            case type === 'is-integer':
              if (!isInteger(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['common_noInteger']
                isValidate = false
              }
              break

            case type === 'checked':
              if (!fieldChecked(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_checked']
                isValidate = false
              }
              break

            case type['minLength'] && type['minLength'].length > 0:

              if (this.validationItems[item].length < parseInt(type['minLength'])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_minLength']
                isValidate = false
              }
              break

            case type === 'latin':
              if (!isLatinSymbols(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_latin']
                isValidate = false
              }
              break

            case type === 'onlyCyrillic':
              if (!isOnlyCyrillicSymbols(this.validationItems[item])) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_onlyCyrillic']
                isValidate = false
              }
              break

            case type === 'file':
              if (this.validationItems[item].length === 0) {
                validation[item] = true
                validationError[item] = ERROR_NAMES['error_file']
                isValidate = false
              }
              break

            default:
              break
          }

        })

      }
    })

    return {
      validation,
      isValidate,
      validationError,
    }
  }

  checkValidation() {
    let validate = this.startValidation()

    Object.keys(this.validationItems).map(item => {
      this.validation[item] = validate.validation[item] ? validate.validation[item] : false
      this.validationTranslate[item] = validate.validationError[item] ? validate.validationError[item] : ''
    })

    return validate.isValidate
  }
  
}

export const ERROR_NAMES = {
  error_required: 'Заповни поле, щоб продовжити',
  error_email: 'Email не валідний',
  error_phone: 'Телефон не валідний',
  error_password: 'Не підходящий пароль',
  error_numeric: 'Тільки цифри',
  common_MoreThanZero: 'Потрібно більше ніж нуль',
  common_notNegativeNumber: 'Тільки плюсове значення',
  common_noInteger: 'Потрібне ціле чсло',
  error_checked: 'Постав галочку, щоб продовжити',
  error_minLength: 'мінімальна довжина 10',
  error_latin: 'Тільки латиниця',
  error_onlyCyrillic: 'Тільки кирилиця',
  error_file: 'Прикрепіть файл',
}


export function emptyArray(item) {
  if (item && Array.isArray(item) && item.length > 0 && item !== []) {
    return true
  } else {
    return false
  }
}

export function fieldEmpty(item) {
  if (item !== '' && item !== null && item !== undefined) {
    return true
  } else {
    return false
  }
}

export function fieldChecked(item) {
  if (item === true) {
    return true
  } else {
    return false
  }
}


export function fieldEmail(fieldEmail) {
  if(fieldEmail === '') return true

  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(fieldEmail)
}

export function fieldPhone(field) {
  if(field === '') return true

  var reg = /^\S((\+\s)?([0-9]{1,})?-?\s?(\([0-9]{1,}\s?\))?)?\s?[\s?0-9]{1,}\S$/

  return reg.test(field)
}


export function fieldNumbers(field) {
  var reg = /^-?[0-9][\d.,]*$/

  return reg.test(parseFloat(field).toString())
}

export function fieldNotZero(field) {
  if(parseFloat(field) > 0) return true
  return false
}

export function fieldNotNegativeNumber(field) {
  if(parseFloat(field) >= 0) return true
  return false
}

export function fieldPassword(fieldPassword) {
  var reg =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

  return reg.test(fieldPassword)
}

export function isLatinSymbols(txt) {
  return !(/[а-я]/i.test(txt))
}

export function isOnlyCyrillicSymbols(txt) {
  return !(/[a-z]/i.test(txt))
}

export function isInteger(num) {
  return (parseFloat(num) ^ 0) === parseFloat(num)
}


export function hasNumber(value) {
  return value.replace(/[^0-9]/g,"").length > 0
}

export function hasUpperCase(value) {
  return value.replace(/[^A-Z]/g,"").length > 0
}

export function hasLowerCase(value) {
  return value.replace(/[^a-z]/g,"").length > 0
}

export function hasSpecialSymbol(value) {
  return value.search(/(?=.*[!@#$%^&*])/g,"") === 0
}
