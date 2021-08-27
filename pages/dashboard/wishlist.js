import React from 'react';
import Sidebar from "../../components/sidebar";
import Image from "next/image";
import WishCard from "../../components/WishCard";
import withAuth from "../../HOC/withAuth";

function Wishlist() {
    return (
        <div className="flex container">
            <Sidebar/>
            <div className="w-full max-w-4xl mt-20 mx-auto">
                <div className="flex justify-end gap-10 items-center">
                    <h2 className="font-semibold tracking-widest text-2xl text-purpleDark">Мой список желаний</h2>
                    <button
                        className="flex w-64 text-center py-2 rounded bg-yellow text-black content-center rounded-3xl font-semibold items-center justify-center text-"
                    ><span className="text-2xl font-semibold mr-4">+</span> Добавь подарок
                    </button>
                </div>
                <WishCard />
            </div>
        </div>
    );
}

export default withAuth(Wishlist);