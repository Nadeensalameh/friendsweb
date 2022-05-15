import './userProfile.css';
import { useState } from 'react';
import axios from 'axios';
import { userInfo } from 'os';
import React from 'react';
import { FaEdit, FaPrint, FaRegTrashAlt } from "react-icons/fa";



export function UserProfile() {
    let [someStr, setSomeStr] = useState(" ");

    let [formInfo, setFormInfo] = useState({
        Username: "",
        Password: "",
        Email: ""
    })

    function mySubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const url = "http://localhost:5111/users "

        axios.get(url, { params: formInfo.Email })
            .then(Response => {
                let users = Response.data;
                console.log(Response);

                console.log(users);
                console.log(formInfo.Email)
                if (users.Email === formInfo.Email) {
                    axios.delete('formInfo')
                        .then(Response2 => {
                            console.log(Response2);
                            alert('Account deleted');
                        })
                }
            });
    }



    const [isOpen2, setisOpen2] = useState(false);
    const [username, setUsername] = useState('');

    let [edituserInfo, setedituserInfo] = useState([{
        userName: "",
        password: ""
    }])

    const getUserScore = () => {
        axios.post("http://localhost:5111/users/usersScore", { Email: formInfo.Email })
            .then(result => {
                console.log("User Score", result)

            })
            .catch(err => {
            })
    }


    const getUserName = () => {
        axios.post("http://localhost:5111/users/username", { email: formInfo.Email })
            .then(result => {
                setUsername(result?.data?.username);


            })
            .catch(err => {
            })
    }

    const handleInputChange = (key: string) => (event: any) => {
        setFormInfo((prev) => {
            return {
                ...prev,
                [key]: event.target.value
            }
        })
    }

    const handleSubmit = () => {
        axios.post("http://localhost:5111/users/updateuser", formInfo)
            .then(result => {
                console.log("User Score", result)

            })
            .catch(err => {
            })
    }
    const handleDelete = () => {
        axios.post("http://localhost:5111/users/deleteuser", { email: formInfo.Email })
            .then(result => {
                console.log("User Score", result)

            })
            .catch(err => {
            })
    }

    const myGrocery = () => {
        axios.post("http://localhost:5111/users/myGrocery", { email: formInfo.Email })
            .then(result => {
                setUsername(result?.data?.username);

            })
            .catch(err => {
            })
    }


    React.useEffect(() => {
        getUserName();
    }, [])


    return (
        <div className="container">

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <span className="stars"></span>
                        <div className='divAroundProfilebuttons'>
                            <button onClick={() => { setisOpen2(isOpen2 ? false : true) }} className="Buttons" id='Editicon'>Edit profile <FaEdit /></button>
                            <button className="Buttons" onClick={handleDelete} ><a href="/">Delete this account < FaRegTrashAlt /></a> </button>
                        </div>
                        {isOpen2 &&
                            <div className="editDiv">
                                <form >


                                    <div className='divAroundNewUserName'>
                                        <label className='divAroundedit'> New User Name:</label>
                                        <input onChange={handleInputChange("Username")} type="text" id="Newusername" name="username" placeholder="UserName" />
                                    </div>

                                    <div className='divAroundNewpassword'>
                                        <label className='divAroundedit'> New password:</label>
                                        <input onChange={handleInputChange("Password")} type="password" id="Newpassword" name="password" placeholder="Password" />
                                    </div>

                                    <div className='divAroundEmail'>
                                        <label className='divAroundedit'> E-mail</label>
                                        <input onChange={handleInputChange("Email")} type="text" id="email" name="email" placeholder="@gmail.com" />
                                    </div>

                                    <div className="divAroundButtons">
                                        <button className='submitButton' onClick={handleSubmit}>Submit</button>
                                        <div>


                                        </div>
                                    </div>
                                </form>

                            </div>
                        }
                    </div>
                </div>
                <div className="face face2">
                    <h2>MY ACCOUNT</h2>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <span className="stars"></span>
                        <h1>MY GROCERIES LIST</h1>
                        <div className='divAroundList'>
                            <button><FaPrint /></button>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <h2>MY GROCERIES LIST</h2>

                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <span className="stars"></span>
                        <h1>I ALREADY MADE IT </h1>
                        <div className='divAroundList'>
                        </div>
                    </div>
                    <div className="face face2">
                        <h2>I ALREADY MADE IT</h2>
                    </div>
                </div>
            </div>
        </div>


    )
}

