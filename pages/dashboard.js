import withAuth from "../HOC/withAuth";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import {useEffect, useState} from "react";
import API from "./api/index"

function Dashboard() {
    const [user, setUser] = useState();
    const [pending, setPending] = useState();
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("user"))?.user_id
        API.getUser(id)
            .then((res) => {
                setPending(false);
                setUser(res.data)
            })
    }, [])
    return (
        <div className="flex container">
        <Sidebar />
        <div className="w-full">
            <Profile user={user} />
        </div>
        </div>
    );
}
export default withAuth(Dashboard);