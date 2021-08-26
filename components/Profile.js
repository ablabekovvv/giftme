import React from 'react';
import Photo from "../public/images/profilephoto.svg"
import Image from "next/image";

function Profile() {
    return (
        <div>
            <div className="text-center mt-8">
                <Image src={Photo} width={196} height={194} />
                <h2 className="font-semibold text-2xl">Kurmanova Aigerim</h2>
                <p>Kurmanova21@mail.ru</p>
            </div>
            <div className="flex text-center">
                <div>
                <h2>123</h2>
                <h2>Друзья</h2>
                </div>
                <div>
                    <h2>123</h2>
                    <h2>Друзья</h2>
                </div>
                <div>
                    <h2>123</h2>
                    <h2>Друзья</h2>
                </div>
            </div>
        </div>
    );
}

export default Profile;