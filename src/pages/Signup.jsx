import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState("John")
    const [epassword, setEpassword] = useState("123")

    function handleUinput(evt) {
        setEusername(evt.target.value)
    }
    function handlePinput(evt) {
        setEpassword(evt.target.value)
    }
    function adduser() {
        setusers([...users,{username: eusername,password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">

            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Signup here 😊</p>

                <div className="flex flex-col gap-2 my-2">

                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Username" onChange={handleUinput}/>

                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Password" onChange={handlePinput}/>

                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Confirm Password" />

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={adduser}>
                        Signup
                    </button>

                    <p>Already have an accout? <Link to={"/"} className="underline">Login</Link></p>

                </div>
            </div>

        </div>

    )
}

export default Signup