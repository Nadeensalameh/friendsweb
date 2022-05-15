import axios from 'axios';
import { useState, useEffect } from 'react';
import './signin.css';


export function Signin() {

    const [feedback, setFeedback] = useState("")
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let [formInfo, setFormInfo] = useState([{
        Email: "",
        password: "",
        usertype: ""
    }])

    const showData = () => {
        for (let index = 0; index < formInfo.length; index++) {

            if (Email === formInfo[index].Email && password === formInfo[index].password) {
                alert("username and password is correct");
                if (Email !== "nadeen.salameh6@gmail.com") {
                    (window.location.href = 'http://localhost:3000/UserProfile')
                }
                else {
                    (window.location.href = 'http://localhost:3000/adminProfile')
                }
            }
            else {
                alert("username or password is incorrect");
            }
        }
    }
    const url = "http://localhost:5112/users"

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response);
                setFormInfo(response.data);
            })
        console.log("useEffect was called");

    }, [])


    function mySubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post("http://localhost:5112/users/users", { email: Email })
            .then(result => {
                if (result.data.message === "passed")
                    if (result.data.userType === "admin") {
                        (window.location.href = 'http://localhost:3000/AdminProfile')
                    } else {
                        (window.location.href = 'http://localhost:3000/UserProfile')
                    }

            })
            .catch(err => {
            })

    }


    return (
        <div className='divAroundAllSignin'>

            <div className='formpage'>

                <form onSubmit={(e) => { mySubmit(e) }}>
                    <div className='divAroundForm'>
                        <div className="signInWord"><h1>Sign In</h1></div>
                        <div className='divAroundEmail'>
                            <label className='lbl'>Email:</label>
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setEmail(e.target.value);
                            }} type="text" id="Email" name="Email" placeholder="@gmail.com" />
                        </div>

                        <div className='divAroundpassword'>
                            <label className='lbl'> password:</label>
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword(e.target.value);
                            }} type="password" id="password" name="password" placeholder="Password" />
                        </div>
                        <div className='divAroundLinks'>
                            <div className='divAroundsubmitButton'>
                            </div>
                            <div className='divAroundcreateAcount' >
                                <button className='submitButton' onClick={showData}>Submit</button>
                                <button className='CreateAccountButton' ><a href="Signup" >Create Account</a></button>
                            </div>
                        </div>
                        <p >{feedback}</p>

                    </div>
                </form >

            </div >

        </div >

    )
}



