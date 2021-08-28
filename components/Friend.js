import Image from "next/image";
import Avatar from "../public/images/avatar-basket.svg"

function Friend() {
    return (
        <div className="max-w-sm w-full h-44 items-center py-2 px-8 flex ">
            <Image src={Avatar} width={100} height={100} />
            <div className="ml-4">
                <h2 className="font-semibold">Курманова Айгерим</h2>
                <p>Описание о себе</p>
            </div>
        </div>
    );
}

export default Friend;