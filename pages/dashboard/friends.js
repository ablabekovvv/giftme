import React, {useState, useEffect} from 'react';
import Sidebar from "../../components/sidebar";
import Friend from "../../components/Friend";
import withAuth from "../../HOC/withAuth";
import API from "../api/index"
import {useUser} from "../../hooks/hooks";

function Friends() {
    const {data, isLoading} = useUser(API.getUsers)
    const [search, setSearch] = React.useState('');


    if(isLoading) return <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
    return (
        <div className="flex container">
            <Sidebar />

            <div className="w-full max-w-4xl mt-20 mx-auto ">
                <div className="relative flex w-full flex-wrap items-stretch mb-3 ">
  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
      <img src="/images/search.svg" alt="search"/>
  </span>
                    <input type="text" placeholder="Placeholder" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10 rounded-full" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className="flex justify-center gap-10 items-center">
                    <h2 className="font-semibold tracking-widest text-3xl text-black">Друзья</h2>
                </div>
                <div className="flex flex-wrap">
                    {
                        data?.data?.filter((item) => item.first_name?.toLowerCase().includes(search.toLowerCase())).map((item) => <Friend key={item.id} id={item.id} photo={item.photo} first_name={item.first_name} last_name={item.last_name} desc={item.description} />)
                    }
                    <Friend  />

                </div>
            </div>
        </div>
    );
}

export default withAuth(Friends);
