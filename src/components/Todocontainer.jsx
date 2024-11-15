import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer() {


    const [activityarr, activityarrst] = useState([

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