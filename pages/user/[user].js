import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import API from "../api/index"
import Sidebar from "../../components/sidebar";
import Avatar from "../../public/images/avatar-basket.svg"
import withAuth from "../../HOC/withAuth";
import Link from "next/link";
import Image from "next/image";
import setting from "../../public/images/setting.svg";

function User() {
    const router = useRouter()
    const {user} = router.query
    const [pending, setPending] = useState(true);
    const [data, setData] = useState(null);
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("user"))?.user_id
        API.getUser(user, id)
            .then((res) => {
                setData(res.data)
                setPending(false)
            })
            .catch((error) => {
                console.log(error.response)
                setPending(false)
            })
    }, [])


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
    if(pending) return  <h1>...Loading</h1>
    return (
        <div className="flex container">
            <Sidebar id={user} />
            <div className="w-full">
                <div className="text-center mt-8">
                    <div className="flex justify-center ">
                        <img src={data?.photo || Avatar} alt="avatar" className="rounded-full w-56 h-56" />
                    </div>
                    <h2 className="font-semibold text-2xl">{`${data?.last_name || 'Unknown'} ${data?.first_name||'Unknown'}`}</h2>
                    <p>{data?.email}</p>
                </div>
                <div className="flex text-center">
                    <div className="w-full bg-yellow mr-1 p-6 rounded">
                        <h2 className="text-2xl text-white mb-4 font-bold">{0 || friends.length}</h2>
                        <h2 className="font-bold text-white uppercase text-2xl">Друзья</h2>
                    </div>
                    <div className="w-full bg-primary p-6 rounded">
                        <h2 className="text-2xl text-white mb-4 font-bold">123</h2>
                        <h2 className="font-bold text-white uppercase text-2xl">ПОДАРИЛ(-а)</h2>
                    </div>
                    <div className="w-full bg-btnPurple ml-1 p-6 rounded">
                        <h2 className="text-2xl text-white mb-4 font-bold">123</h2>
                        <h2 className="font-bold text-white uppercase text-2xl">ПОДАРЕНО</h2>
                    </div>
                </div>
                <div className="texts mt-6">
                    <p>{data?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default withAuth(User);
