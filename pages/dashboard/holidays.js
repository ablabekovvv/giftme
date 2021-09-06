import withAuth from "../../HOC/withAuth";
import React from 'react';
import css from '../../styles/myholiday.module.css'
import {ModalHoliday} from "../../components/ModalHoliday/ModalHoliday";
import API from '../api/index';
import {HolidayCard} from "../../components/HolidayCard";
import Sidebar from "../../components/sidebar";
import {useUser} from "../../hooks/hooks";

export const Holidays = ({userId}) => {
    const [openModal, setOpenModal] = React.useState(false)
    const [editHoliday, setEditHoliday] = React.useState(null)
    const {data, isLoading} = useUser(API.getHolidays)
    const [holidays, setHolidays] =React.useState([])
    React.useEffect(()=>{
        setHolidays(data?.data)
    },[data])




    const addHoliday = (obj) =>{
        setHolidays([...holidays, obj])
    }
    const isEditHolidays = (obj)=> {
        setHolidays(holidays.map((item) =>{
            if (item.id === obj.id)return obj;
            return item
        }))
    }
    const deleteHoliday = (id) =>{

        API.deleteHoliday(id)
            .then((res) =>setHolidays(holidays.filter((item) => item.id !== id)))
            .catch((error) => {
                console.log(error.response)
            })
    }
    if(isLoading) return <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>

    return (
        <div className="flex">
            <Sidebar />
            <div className={css.holidays}>
                <div className={css.content}>
                    <div className={css.head}>
                        <h4 className={css.title}>{userId? 'Праздники':'Ваши праздники'}</h4>
                        {!userId && <div className={css.add} onClick={() => setOpenModal(true)}> &#43; Добавь подарок</div>}
                    </div>
                    <div className={css.cards}>
                        {
                            holidays?.length?holidays.map((item) =><HolidayCard
                                deleteHoliday={deleteHoliday}
                                setEditHoliday={setEditHoliday}
                                key={item.id}
                                {...item}
                                item={item}
                                userId={userId}
                            /> ): <h3 className='watter__word'>Нет праздников</h3>
                        }
                    </div>
                </div>
            </div>
            {(openModal || editHoliday) &&
            <ModalHoliday openModal={openModal} setOpenModal={setOpenModal}
                          editHoliday={editHoliday} setEditHoliday={setEditHoliday}
                          isEditHoliday={isEditHolidays} addHoliday={addHoliday} /> }
        </div>

    )};


export default withAuth(Holidays);