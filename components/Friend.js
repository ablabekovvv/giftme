import Image from "next/image";
import Avatar from "../public/images/avatar-basket.svg"
import {Link} from "@material-ui/core";

function Friend({last_name, first_name, desc, id}) {

    return (
        <div className="max-w-sm w-full h-44 items-center py-2 px-8 flex ">

            <Image src={Avatar} width={100} height={100} />

            <div className="ml-32 absolute max-w-xs">
                <Link href={`/user/${id}`} className="flex">
                <h2 className="font-semibold">{first_name}</h2>
                    <h2 className="font-semibold">&nbsp;{last_name}</h2>
                </Link>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Friend;