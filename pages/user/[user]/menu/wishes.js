import {useRouter} from "next/router";
import Sidebar from "../../../../components/sidebar";
import css from "../../../../styles/myholiday.module.css";
import {HolidayCard} from "../../../../components/HolidayCard";
import React from "react";
import API from "../../../api";
import withAuth from "../../../../HOC/withAuth";
import {Card} from "../../../mywish/Card";

const userHolidays = () => {
    const router = useRouter()
    const {user} = router.query;
    const [wish, setWishes] = React.useState([]);
    React.useEffect(() =>{
        API.getUserWishes()
            .then((res) => {
                setWishes(res.data.filter((item) => item.user === Number(user)))

            })
            .catch((error) => {
                console.log(error.response)
            })
    }, [])
    return(
        <div className="flex">
            <Sidebar id={user} />
            <div className={css.holidays}>
                <div className={css.content}>
                    <div className={css.head}>
                        <h4 className={css.title}>Праздники</h4>
                    </div>
                    <div className={css.cards}>
                        {wish.map((wish) => <Card key={wish.id} {...wish} wish={wish} userId={user} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(userHolidays);

