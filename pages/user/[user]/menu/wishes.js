import {useRouter} from "next/router";
import Sidebar from "../../../../components/sidebar";
import css from "../../../../styles/myholiday.module.css";
import React from "react";
import API from "../../../api";
import withAuth from "../../../../HOC/withAuth";
import {Card} from "../../../../components/mywish/Card";
import {useUser} from "../../../../hooks/hooks";

const userHolidays = () => {
    const router = useRouter()
    const {user} = router.query;
    const [wish, setWishes] = React.useState([]);
    const {data, isLoading} = useUser(API.getUserWishes)
    React.useEffect(() =>{
                setWishes(data?.data?.filter((item) => item.user === Number(user)))
    }, [data])
    if(isLoading) return <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
    return(
        <div className="flex">
            <Sidebar id={user} />
            <div className={css.holidays}>
                <div className={css.content}>
                    <div className={css.head}>
                        <h4 className={css.title}>Список желаний</h4>
                    </div>
                    <div className={css.cards}>
                        {wish?.length? wish?.map((wish) => <Card key={wish.id} {...wish} wish={wish} userId={user} /> ) : <h2>
                           Нет желаний
                        </h2> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(userHolidays);

