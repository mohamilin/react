import React, {useState, useEffect} from 'react'
import Axios from'axios'
function Login() {

    const [data, setData] = useState([])

    useEffect(()=> {
        console.log("data", data.sembuh)
        Axios
            .get(`https://indonesia-covid-19.mathdro.id/api/`)
            .then((response) => setData(response.data))
    }, [data])


    return (
        <div>
            <h1>Halaman Login</h1>
           
                <div>
                    <h1>sembuh : {data.sembuh}</h1>
                </div>
        </div>
    )
}

export default Login
