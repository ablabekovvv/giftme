import React, {useEffect, useState} from 'react';
import Photo from "../../public/images/profilephoto.svg"
import Image from "next/image";
import setting from "../../public/images/setting.svg"
import Sidebar from "../../components/sidebar";
import withAuth from "../../HOC/withAuth";
import API from "../api";
import Link from "next/link";
import {useSelector} from "react-redux";
import useSWR from 'swr'
import {useUser} from "../../hooks/hooks";



function Profile() {
    const user = useUser(API.getUsers);
    console.log(user)
    const isAuth = useSelector((state) => state?.auth.token);
    const [data, setData] = React.useState(null);
    const [pending, setPending] = React.useState(true)
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        const id = JSON.parse(localStorage.getItem("user"))?.user_id
        API.getUser(id)
            .then((res) => {
                setData(res.data)
                setPending(false)
            })
            .catch((error) => {
                console.log(error.response)
                setPending(false)

            })
    },[])
    if(pending) return <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
    return (
        <div className="flex container">
            <Sidebar />
        <div className="w-full">
            <div className="text-center mt-8">
                <div className="flex justify-center ">
                <img src={data?.photo} alt="avatar" className="rounded-full w-56 h-56" />
                </div>
                <h2 className="font-semibold text-2xl">{`${data?.last_name || 'Unknown'} ${data?.first_name||'Unknown'}`}</h2>
                <p>{data?.email}</p>
            </div>
            <Link href="/dashboard/changeprofile">
            <div className="flex text-center w-full justify-center p-4 bg-purple mt-12 cursor-pointer">
                <Image src={setting} width={20} height={20} />
                <p className="font-semibold ml-2">Редактировать профиль</p>
            </div>
            </Link>
            <div className="flex text-center">
                <div className="w-full bg-yellow mr-1 p-6 rounded">
                <h2 className="text-2xl text-white mb-4 font-bold">{0 || user.data?.data?.length}</h2>
                    <h2 className="font-bold text-white uppercase text-2xl">Друзья</h2>
                </div>
                <div className="w-full bg-primary p-6 rounded">
                    <h2 className="text-2xl text-white mb-4 font-bold">123</h2>
                    <h2 className="font-bold text-white uppercase text-2xl">ПОДАРИЛ(-a)</h2>
                </div>
                <div className="w-full bg-btnPurple ml-1 p-6 rounded">
                    <h2 className="text-2xl text-white mb-4 font-bold">{data?.wishes.length}</h2>
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

export default withAuth(Profile);
