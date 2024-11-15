function Todoitem(props) {
    const activityarr = props.activityarr
    const activityarrst = props.activityarrst

    function handledel(delid) {
        var temparr = activityarr.filter(function (item) {
            if (item.id === delid) {
                return false
            }
            else {
                return true
            }
        })

        activityarrst(temparr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.value.activity}</p>
            <button className="text-red-500 font-bold" onClick={() => { handledel(props.id) }}>Delete</button></div>

    )

}

export default Todoitem