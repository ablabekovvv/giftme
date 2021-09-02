import Image from "next/image";
import Pointers from "../public/images/pointers.svg"

function HolidayCard({name}) {
    return (
        <div className="flex items-center justify-between border-2 border-black border-opacity-10 ">
            <div className="flex gap-10 pl-6  ">
                <p className="font-semibold text-xl text-primary">23 февраля</p>
                <p className="font-semibold text-xl ">{name}</p>
            </div>
            <div className="pr-6 pt-4 pb-4 cursor-pointer">
            <Image src={Pointers} width={8} height={27} />
            </div>
        </div>
    );
}

export default HolidayCard;