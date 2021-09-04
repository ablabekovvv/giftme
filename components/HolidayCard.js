import React from 'react';
import css from "../styles/myholiday.module.css";

export  const HolidayCard = ({item, setEditHoliday, deleteHoliday, userId}) => {

    return (
        <div className={css.column}>

            <div className={css.left}>
                <h5>{`${item.day} ${item.month}` }</h5>
                <p>{item.name}</p>
            </div>
            {!userId && <div className={css.right}>
                <img className={css.dots} src="/images/pointers.svg" alt="dots"/>
                <div className={css.choise}>
                    <div className={css.change} onClick={() => setEditHoliday(item)}>Изменить</div>
                    <div className={css.delete} onClick={() => deleteHoliday(item.id)}>Удалить</div>
                </div>
            </div>}

        </div>
    );
};