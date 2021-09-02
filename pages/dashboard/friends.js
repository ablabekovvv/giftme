import React, {useState, useEffect} from 'react';
import Sidebar from "../../components/sidebar";
import Friend from "../../components/Friend";
import withAuth from "../../HOC/withAuth";
import API from "../api/index"

function Friends() {
    const [isPending, setIsPending] = useState(true);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        API.getUsers()
            .finally(() => setIsPending(false))
            .then((res) => {
                setFriends(res.data)
            })
    }, [])
    if(isPending) return <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
    return (
        <div className="flex container">
            <Sidebar/>

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
    );
}

export default withAuth(Friends);