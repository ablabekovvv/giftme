import React from 'react';
import Sidebar from "../../components/sidebar";
import Friend from "../../components/Friend";
import withAuth from "../../HOC/withAuth";

function Friends() {
    return (
        <div className="flex container">
            <Sidebar/>
            <div className="w-full max-w-4xl mt-20 mx-auto">
                <div className="flex justify-center gap-10 items-center">
                    <h2 className="font-semibold tracking-widest text-3xl text-black">Друзья</h2>
                </div>
                <div className="flex flex-wrap">
                    <Friend />
                    <Friend />
                    <Friend />
                </div>
            </div>
        </div>
    );
}

export default withAuth(Friends);