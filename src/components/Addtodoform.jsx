import { useState } from "react"

function Addtodoform(props) {

    const activityarr = props.activityarr
    const activityarrst = props.activityarrst

    const [newactivity, setnewactivity] = useState("")


    function handlechange(evt) {
        setnewactivity(evt.target.value)
    }

    function addactivity() {
        if (newactivity.trim() === "") {
            alert("Input box is empty");
        }
        else {
            activityarrst([...activityarr, { id: activityarr.length + 1, activity: newactivity }])
            setnewactivity("")
        }
    }

    return (
        <div className="flex flex-col gap-3">

            <h1 className="text-2xl font-medium">Manage activities</h1>

            <div>
                <input value={newactivity} onChange={handlechange} className="border border-black bg-transparent p-1" placeholder="Next Activity?" type="text" />
                <button className="bg-black border border-black p-1 text-white" onClick={addactivity} >Add</button>
            </div>

        </div>)
}

export default Addtodoform