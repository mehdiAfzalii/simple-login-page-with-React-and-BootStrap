import React, { useState } from 'react'
import photo from "./4077880.webp"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [selected, setSelect] = useState('')

    function handleChange(e) {
        setSelect(e.target.value)
    }

    function handleClick() {
        if (username.trim() !== '' && password.trim() !== '' && selected.trim() !== '') {
            alert(`${username} ${password} ${selected}`)
        }
        else {
            alert("Please Enter Your Information")
        }
    }

  return (
    <div>
        <div className='login'>    
            <div className='container'>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={e => setUsername(e.target.value)} />
                </div>

                <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Enter Your Password" aria-label="Recipient's username" aria-describedby="basic-addon2" value={password} onChange={e => setPassword(e.target.value)} />
                    <span class="input-group-text" id="basic-addon2">Password</span>
                </div>

                <h3>Select Your Gender</h3>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value={"Male"} checked={selected === "Male"} onChange={e => handleChange(e)} />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={"Female"} checked={selected === "Female"} onChange={e => handleChange(e)}/>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>

                <button type="button" class="btn btn-success w-100" onClick={handleClick}>Success</button>
            </div>

            <div className='image'>
                <img src={photo} />
            </div>
        </div>
    </div>
  )
}

export default Login