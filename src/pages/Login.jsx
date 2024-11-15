import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const navigate = useNavigate()

    const [eusername, setEusername] = useState("John")
    const [epassword, setEpassword] = useState("123")
    const [ruser, setruser] = useState(true)

    const users = props.users

    function handleUinput(evt) {
        setEusername(evt.target.value)
    }
    function handlePinput(evt) {
        setEpassword(evt.target.value)
    }


    function checkuser() {
        var userfound = false
        console.log(users)

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Succesful")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        })

        if (userfound == false) {
            console.log("Login Failed")
            setruser(false)
        }
    }

    return (
        <div className="bg-black p-10">

            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>

                {ruser ? <p>I help you manage your activities after login</p> : <p className="text-red-500">Please signup before you login</p>}

                <div className="flex flex-col gap-2 my-2">

                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Username" value={eusername} onChange={handleUinput} />

                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Password" value={epassword} onChange={handlePinput} />

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>
                        Login
                    </button>

                    <p>Dont have an accout? <Link to={"/signup"} className="underline">Signup</Link></p>

                </div>
            </div>
        </div>

    )
}

export default Login