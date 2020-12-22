import { useState } from 'react'

const usePasswordValidator = () => {
  // initial state for form
  const [data, setData] = useState({
    data: {
      password: {
        isValid: { valid: false, error: 'Password cannot be empty' },
        value: '',
        validator: val => {
          if (val.length > 5) {
            return { valid: true, error: '' }
          } else {
            return {
              valid: false,
              error: 'at least 6 characters for a password'
            }
          }
        }
      },
      confirmPassword: {
        isValid: { valid: false, error: 'Password cannot be empty' },
        value: '',
        validator: (val, confirmVal) => {
          if (val === confirmVal) {
            return { valid: true, error: '' }
          } else {
            if (val === '') return { valid: false, error: 'Field cannot be empty' }
            else {
              return {
                valid: false,
                error: 'Password does not match'
              }
            }
          }
        }
      }
    }
  })

  // update form handler
  const setDataHandler = (key, input) => {
    setData(prevData => {
      if (key !== 'confirmPassword') {
        return {
          data: {
            ...prevData.data,
            [key]: {
              ...prevData.data[key],
              value: input,
              isValid: prevData.data[key].validator(input)
            }
          }
        }
      } else {
        return {
          data: {
            ...prevData.data,
            [key]: {
              ...prevData.data[key],
              value: input,
              isValid: prevData.data[key].validator(input, prevData.data.password.value)
            }
          }
        }
      }
    })
  }

  return { data, setDataHandler }
}
export default usePasswordValidator
