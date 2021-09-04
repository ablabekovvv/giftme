import {useRouter} from "next/router";
import Sidebar from "../../../../components/sidebar";
import css from "../../../../styles/myholiday.module.css";
import {HolidayCard} from "../../../../components/HolidayCard";
import React from "react";
import API from "../../../api";
import withAuth from "../../../../HOC/withAuth";

const userHolidays = () => {
    const router = useRouter()
    const {user} = router.query;
    const [holidays, setHolidays] = React.useState([]);
    React.useEffect(() =>{
        API.getUserHolidays()
                .then((res) => {
                    setHolidays(res.data.filter((item) => item.user === Number(user)))

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
                        {
                            holidays.length?holidays.map((item) =><HolidayCard
                                key={item.id}
                                {...item}
                                item={item}
                                userId={user}
                            /> ): <h3 className='watter__word'>Нет праздников</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(userHolidays);