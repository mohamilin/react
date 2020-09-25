import React from 'react'
import CalculateBmi from './CalculateBmi';
import InputBmi from './InputBmi';

function DisplayBmi(props) {

    const weight = InputBmi()
    const height = InputBmi()
    const {bmiValue, bmiResult} = CalculateBmi(weight, height)

    console.log('bmi',bmiValue )

    return (
        <>
        <div>
                <label>Masukkan Berat</label>
                <input type="text" {...weight} />
            </div>
            <div>
                <label>Masukkan Tinggi</label>
                <input type="text" {...height} />
            </div>
        <h1>Nilai BMI:{bmiValue} </h1>
        <h1>Hasil BMI : {bmiResult} </h1>
        </>
    )
}

export default DisplayBmi
