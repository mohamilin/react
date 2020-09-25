function CalculateBmi(kg, m) {

    const {value: weight} = kg
    const {value: height} = m

    const bmiValue = (weight, height) => {
        if(weight !== '' && height !== '') {
            return (weight / Math.pow(height, 2)*10000).toFixed(2);
        }
        return 'Silahkan Masukkan Berat / Tinggi'
    }

    const bmiResult = (bmi) => {
        if(bmi > 0 && bmi <= 18.5) {
            return 'Kurus'
        } else if(bmi > 18.5 && bmi <= 24.9) {
            return 'normal'
        } else if(bmi >=25 && bmi < 29.9) {
            return 'gemuk'
        } else if(bmi >= 30) {
            return 'obesitas'
        } 
        return ''
    }

    return {
        bmiValue : bmiValue(weight, height),
        bmiResult: bmiResult(bmiValue(weight, height))
    }
}

export default CalculateBmi
