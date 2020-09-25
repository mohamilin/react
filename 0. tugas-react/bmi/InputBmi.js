import {useState} from 'react'

function InputBmi() {

    const [value, setValue] = useState()

    const handleChange = (e) => {
        if(e.target.value.length > 0 && e.target.validity.valid) {
            setValue(parseFloat(e.target.value).toString());
        } else {
            setValue('')
        }
    }

    return {
       value, 
       onChange: handleChange
    }
}

export default InputBmi
