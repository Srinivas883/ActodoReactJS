import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer() {


    const [activityarr, activityarrst] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Read Book for 15mins"
        }
    ])



    return (
        <div>
            <div className="flex gap-5 flex-wrap">

                <Addtodoform activityarr={activityarr} activityarrst={activityarrst}/>
                <Todolist activityarr={activityarr} activityarrst={activityarrst}/>

            </div>
        </div>
    )
}

export default Todocontainer