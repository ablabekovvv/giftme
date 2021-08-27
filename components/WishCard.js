import React from 'react';
import Image from "next/image";
import Card from "../public/images/card.svg";
import Star from "../public/images/star.svg";
import Write from "../public/images/write.svg";
function WishCard() {
    return (
        <div className="flex w-full shadow mt-10 pl-12 py-4 items-center">
            <Image src={Card} width={60} height={70}/>
            <div className="ml-6">
                <h2 className="text-xs font-semibold mb-1">Книга</h2>
                <p className="max-w-xl text-xs">Hello, it's time to start your today's standup for cm_lab_giftme. Please answer following questions (reply skip to not report today).....</p>
                <a href="https://www.thingstogetme.com/177412af2132" className="text-xs text-primary">https://www.thingstogetme.com/177412af2132</a>
                <p className="text-xs mb-1">дата</p>
            </div>
            <div className="flex ml-16">
                <div className="mr-10">
                    <Image src={Star} width={30} height={30}  />
                </div>
                <Image src={Write} width={20} height={20} />
            </div>
        </div>
    );
}
export default WishCard;