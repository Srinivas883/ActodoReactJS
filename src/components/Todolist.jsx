// import { useState } from "react"
import Todoitem from "./Todoitem"

function Todolist(props) {

    const activityarr = props.activityarr
    const activityarrst = props.activityarrst


    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityarr.length === 0 ? <p>You haven't added anything yet 😔</p> : ""}
            {activityarr.map(function (value, index) {
                return <Todoitem id={value.id} index={index} value={value} activityarr={activityarr} activityarrst={activityarrst} />
            })}
        </div>
    )
}

export default Todolist