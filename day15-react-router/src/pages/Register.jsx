import React, {useState} from 'react';

const Register = () => {
    //buat arrow function untuk menampung semua data, default datanya kosong
    // shg cukup diberikan ""
    const inputData = ({
        fullName: "",
        email: "",
        password: "",
        dob: "",
        address: "",
        gender: "",
        // skills: ['coding', 'design', 'game']
    });

    // setSkills([...skills, event.target.value])

    const [skill, setSkills] = useState('coding', 'design', 'game')

    const [formData, setFormData] = useState(inputData);

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value.trim()
            //menggunakan method trim untuk menghapus spasi
        });
    };

    const handleChangeSkill = (event) => {
        setSkills(
            {...skill, [event.target.name]:event.target.value
        });
    }




 
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('data', formData);
        // console.log('kelamin', formData.gender);

        // alert('terima kasih :' + formData.fullName);
        // alert('Jenis Kelamin :' + formData.gender);
        // alert('Tanggal :' + formData.dob);
        // console.log('skil :' + formData.skills);
 

        alert('Alamat :' + formData.address);
        // alert('skils :' + skill);

        console.log('skils :' + skill);

        // setelah tekan ok ganti halaman
        // window.location.replace('/about');

    };

    return (
        <>
           <form>
           <label>
                Nama Lengkap :
            <input name="fullName" onChange={handleChange} />
            </label>
            <br />
            <label>
                email :
            <input type="email" name="email" onChange={handleChange} />
            </label>
            <br />
            <label>
                Password
            <input type="password" name="password" onChange={handleChange} />
            </label>
            <br />
            <label>
                Tanggal Lahir :
            <input name="dob" onChange={handleChange} />
            </label>
            <br />
            <label>
                Jenis Kelamin :
                <input type="radio" value="Laki-Laki" name="gender" onChange={handleChange} /> Laki-Laki
                <input type="radio" value="Perempuan" name="gender" onChange={handleChange}/> Perempuan
            </label>
            <br />
            <label>
                Alamat :
            <textarea name="address" onChange={handleChange} />
            </label>
            <br />
            <label>
                Skills : 
            <input type="checkbox" value="Coding"  name = 'skills' onChange={handleChangeSkill}  /> Coding
            <input type="checkbox" value="Design"  name = 'skills' onChange={handleChangeSkill} /> Design
            <input type="checkbox" value="Gaming"  name = 'skills' onChange={handleChangeSkill} /> Gaming

            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button> 
           </form>
        </>
    );
};


export default Register;
