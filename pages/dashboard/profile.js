import React, {useEffect, useState} from 'react';
import Photo from "../../public/images/profilephoto.svg"
import Image from "next/image";
import setting from "../../public/images/setting.svg"
import Sidebar from "../../components/sidebar";
import withAuth from "../../HOC/withAuth";
import API from "../api";
import Link from "next/link";

function Profile() {
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
        <div className="flex">
            <Sidebar />
        <div className="w-full">
            <div className="text-center mt-8">
                <Image src={Photo} width={196} height={194} />
                <h2 className="font-semibold text-2xl">Kurmanova Aigerim</h2>
                <p>{user?.email}</p>
            </div>
            <Link href="/dashboard/changeprofile">
            <div className="flex text-center w-full justify-center p-4 bg-purple mt-12 cursor-pointer">
                <Image src={setting} width={20} height={20} />
                <p className="font-semibold ml-2">Редактировать профиль</p>
            </div>
            </Link>
            <div className="flex text-center">
                <div className="w-full bg-yellow mr-1 p-6 rounded">
                <h2 className="text-2xl text-white mb-4 font-bold">123</h2>
                    <h2 className="font-bold text-white uppercase text-2xl">Друзья</h2>
                </div>
                <div className="w-full bg-yellow p-6 rounded">
                    <h2 className="text-2xl text-white mb-4 font-bold">123</h2>
                    <h2 className="font-bold text-white uppercase text-2xl">Друзья</h2>
                </div>
                <div className="w-full bg-yellow ml-1 p-6 rounded">
                    <h2 className="text-2xl text-white mb-4 font-bold">123</h2>
                    <h2 className="font-bold text-white uppercase text-2xl">Друзья</h2>
                </div>
            </div>
        </div>
        </div>
    );
}

export default withAuth(Profile);