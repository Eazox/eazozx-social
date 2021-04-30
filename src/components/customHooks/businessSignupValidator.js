import { useState } from 'react'

const urlValidationRegex = /[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/

const useFormValidation = () => {
  // initial state for  form
  const [data, setData] = useState({
    data: {
      businessName: {
        isValid: { valid: false, error: 'This field cannot be empty' },
        value: '',
        validator: val => {
          if (val.length !== 0) {
            return { valid: true, error: '' }
          } else {
            return { valid: false, error: 'Name cannot be empty' }
          }
        }
      },
      location: {
        isValid: { valid: false, error: 'This field cannot be empty' },
        value: '',
        validator: val => {
          if (val.length !== 0) {
            return { valid: true, error: '' }
          } else {
            return { valid: false, error: 'Username cannot be empty' }
          }
        }
      },
      website: {
        isValid: { valid: false, error: 'email cannot be empty' },
        value: '',
        validator: val => {
          if (urlValidationRegex.test(val)) {
            if (val.length > 2) {
              return { valid: true, error: '' }
            } else {
              return {
                valid: false,
                error: 'at least 3 characters for website name'
              }
            }
          }
          return { valid: false, error: 'Input is not a valid url' }
        }
      },
      tags: {
        isValid: { valid: false, error: 'at least one tag required' },
        data: ['phone', 'wallet', 'bags', 'clothes', 'food'],
        value: [],
        validator: val => {
          if (val.length > 0) {
            return { valid: true, error: '' }
          } else {
            return {
              valid: false,
              error: 'at least 1 tag required'
            }
          }
        }
      },
      startTime: {
        isValid: { valid: false, error: 'Required field' },
        value: null,
        validator: val => {
          if (val) {
            return { valid: true, error: '' }
          } else {
            return {
              valid: false,
              error: 'Required field'
            }
          }
        }
      },
      endTime: {
        isValid: { valid: false, error: 'Required field' },
        value: null,
        validator: val => {
          if (val) {
            return { valid: true, error: '' }
          } else {
            return {
              valid: false,
              error: 'Required field'
            }
          }
        }
      },
      agreedCheckbox: {
        isValid: { valid: false, error: 'Must be checked first' },
        value: false,
        validator: val => {
          if (val !== true) {
            return { valid: false, error: 'Must be checked first' }
          } else return { valid: true, error: '' }
        }
      }
    }
  })

  // update form handler
  const setHandler = (key, input) => {
    setData(prevData => {
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
    })
  }

  const updateTags = value => {
    setData(prevData => {
      return {
        data: {
          ...prevData.data,
          tags: {
            ...prevData.data.tags,
            data: [...prevData.data.tags.data, { tag: value }]
          }
        }
      }
    })
  }

  return { data, setHandler, updateTags }
}
export default useFormValidation
