import { useState } from 'react';
import './Adminprofile.css';
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


function AdminProfile() {


    let [formInfo, setFormInfo] = useState({
        date: "",
        path: "",
        description: "",
        postType: ""
    })

    const shareproductinshop = () => {
        // function for saving the product in database
    }

    const [date, setDate] = useState<Date | null>(new Date());
    function mySubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        axios.post("http://localhost:5111/posts/new-post", formInfo)
            .then(result => {
                (window.location.href = 'http://localhost:3000/UserProfile')
            })
            .catch(err => {
            })
    }
    const saveData = () => {

    }


    return (
        <div className="divAroundAllAdminProfile">
            <form onSubmit={(e) => { mySubmit(e) }} >
                <div className="divAroundPosts">
                    <h1>share post</h1>

                    <input type="text " placeholder='path' />
                    <input type="text " placeholder='description' />
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={(date) => setDate(date)}

                        />
                    </div>


                    <select className="postType">
                        <option value="postType">postType</option>
                        <option value="video">video</option>
                        <option value="img">img</option>
                    </select>

                    <div className="uploadPost">
                        <input type="file" placeholder='upload post' />
                    </div>
                    <button onClick={saveData}>Submit</button>
                </div>
            </form >


            <div className="divAroundShop">
                <h1>share products</h1>
                <input type="files" />
                <input type="text " placeholder='link' />
                <button onClick={shareproductinshop}>share</button>
            </div >

        </div>
    )
}

export default AdminProfile

