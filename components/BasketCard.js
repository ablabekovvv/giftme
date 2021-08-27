import React from 'react';
import Image from "next/image";
import Avatar from "../public/images/avatar-basket.svg";
import Done from "../public/images/done.svg";
import Pointers from "../public/images/pointers.svg";

function BasketCard() {
    return (
            <div className="flex w-full shadow-md mt-10 pl-6 py-4 items-center rounded-xl border-2 border-black border-opacity-25">
                <Image src={Avatar} width={60} height={60}/>
                <div className="ml-6">
                    <h2 className="text-xs font-semibold mb-1">Курманова Айгерим</h2>
                    <h2 className="text-xs font-semibold mb-1">Книга</h2>
                    <p className="max-w-xl text-xs">This is the very beginning of your direct message history withOnly the two of you are in this conversation, and no one else can join it. Learn more......</p>
                </div>
                <div className="flex ml-28 items-center">
                    <div className="mr-4">
                        <Image src={Done} width={45} height={45}  />
                    </div>
                    <Image src={Pointers} width={8} height={30} />
                </div>
            </div>
    );
}

export default BasketCard;