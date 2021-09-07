import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import API from "../api/index"
import Sidebar from "../../components/sidebar";
import Avatar from "../../public/images/avatar-basket.svg"
import withAuth from "../../HOC/withAuth";
import {useUser} from "../../hooks/hooks";

function User() {
    const router = useRouter()
    const {user} = router.query;
    // const {data, isLoading} = useUser(API.getUser(user)
    const [pending, setPending] = React.useState(true)
    const [data, setData] = React.useState(null);
    useEffect(()=>{
        if(user){
            API.getUser(user)
                .then((res) => {
                    setData(res.data)
                })
                .catch((error) => {
                    console.log(error.response)

                })
                .finally(() => setPending(false))
        }
    },[user])
    if(pending) return  <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
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
                        <h2 className="text-2xl text-white mb-4 font-bold">{0 || data?.data?.length}</h2>
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
                    <p>{data?.data?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default withAuth(User);
