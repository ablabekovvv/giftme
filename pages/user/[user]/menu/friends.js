import { useRouter } from 'next/router'
import Sidebar from "../../../../components/sidebar";
import Friend from "../../../../components/Friend";
import React, {useEffect, useState} from "react";
import API from "../../../api";
import withAuth from "../../../../HOC/withAuth";

const Friends = () => {
    const router = useRouter()
    const {user} = router.query
    const [pending, setPending] = useState(true);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("user"))?.user_id
        API.getUsers(user, id)
            .then((res) => {
                setFriends(res.data)
                setPending(false)
            })
            .catch((error) => {
                console.log(error.response)
                setPending(false)
            })
    }, [])

    if(pending) return <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>

    return (
        <div className="flex container">
            <Sidebar id={user} />

            <div className="w-full max-w-4xl mt-20 mx-auto">
                <div className="flex justify-center gap-10 items-center">
                    <h2 className="font-semibold tracking-widest text-3xl text-black">Друзья</h2>
                </div>
                <div className="flex flex-wrap">
                    {
                        friends.map((item) => <Friend key={item.id} id={item.id} photo={item.photo} first_name={item.first_name} last_name={item.last_name} desc={item.description} />)
                    }
                    <Friend  />

                </div>
            </div>
        </div>

    )
}

export default withAuth(Friends);
