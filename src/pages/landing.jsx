import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";

function Landing() {

    const data = useLocation()
    return (
    <div className="bg-black p-16" >

        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            {/* Header */}
            <Header name={data.state.user}/>

            {/* Card */}
            <div className="flex justify-between gap-7 my-5 flex-wrap">
                <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Chennai"} />
                <Card bgcolor={"#FD6663"} title={"November 07"} subtitle={"18:10:56"} />
                <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
            </div>

            {/* TodoContainer */}
            <Todocontainer />
        </div>

    </div>)
}

export default Landing