import { useState } from 'react'

const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const useFormValidation = () => {
const [ data, setData ] = useState({
    data: {
        fullname: {
            isValid: false,
            value: '',
            validator: (val) => {
                if ( val.length !== 0 ){
                    return { valid: true, error: ''}
                } 
                else {
                    return { valid: false, error: 'Name cannot be empty'}
                }
            }
        },
        username: {
            isValid: false,
            value: '',
            validator: (val) => {
                if ( val.length !== 0 ){
                    return { valid: true, error: ''}
                } 
                else {
                    return { valid: false, error: 'Username cannot be empty'}
                }
            }
        },
        email: {
            isValid: false,
            value: '',
            validator: (val) => {
                if (emailValidationRegex.test(val)) {
                    if (val.length > 5) {
                        return { valid: true, error: '' };
                    } else {
                        return { valid: false, error: 'at least 6 characters for email address' };
                    }
                }
                return { valid: false, error: 'Input is not an email address' };
            },
        },
        password: {
            isValid: false,
            value: '',
            validator: (val) => {
                if (val.length > 5) {
                    return { valid: true, error: '' };
                } else {
                    return { valid: false, error: 'at least 6 characters for a password' };
                }
            },
        },
        number: {
            isValid: false,
            value: '',
            validator: (val) => {
                if ( val.length >= 10 ){
                    return { valid: true, error: ''}
                } 
                else {
                    return { valid: false, error: 'Number must have at least 10 characters'}
                }
            }
        },
        gender: {
            isValid: true,
            value: 'key0',
            validator: (val) => {
                return { valid: true, error: ''}
            }
        },
        numberHeader: {
            isValid: true,
            value: 'key0',
            validator: (val) => {
                return { valid: true, error: ''}
            }
        },
        agreedCheckbox: {
            isValid: false,
            value: false,
            validator: (val) => {
                if ( val !== true) {
                    return { valid: false, error: 'Must be checked before'}
                }
                else
                return { valid: true, error: ''}
            }
        }
    }
})

const setHandler = (key, input) => {
    setData((prevData) => {
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

return { data, setHandler }
}
export default useFormValidation