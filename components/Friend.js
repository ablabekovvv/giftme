import Image from "next/image";
import Avatar from "../public/images/avatar-basket.svg"
import {Link} from "@material-ui/core";
import {useRouter} from "next/router";

function Friend({last_name, first_name, desc, id, photo}) {
    const router = useRouter()
    return (
        <div className="max-w-sm w-full h-44 items-center py-2 px-8 flex ">

            <img src={photo || Avatar} width={100} height={100} alt="avatar" className="rounded-full" />

            <div className="ml-32 absolute friends__desc">
                <Link href={`/user/${id}`} className="flex">
                <h2 className="font-semibold">{first_name}</h2>
                    <h2 className="font-semibold">&nbsp;{last_name}</h2>
                </Link>
                <p className="friend_desc">{desc}</p>
                <span className="cursor-pointer" onClick={()=> router.push(`/user/${id}`)}>...</span>
            </div>
        </div>
    );
}

export default Friend;