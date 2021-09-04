import React from 'react';
import css from './modalholiday.module.css'
import Button from "../Buttons/Buttons";
import API from '../../pages/api/index'
import {useDispatch} from "react-redux";
// import {addHoliday} from "../../../store/action";

export const ModalHoliday = ({openModal,setOpenModal, editHoliday, isEditHoliday,setEditHoliday, addHoliday}) => {
    // const dispatcher = useDispatch()
    const [values, setValues] = React.useState({
        name: editHoliday?.name||'',
        day: editHoliday?.day|| '',
        month: editHoliday?.month ||''
    })
    const submit = (e) =>{
        e.preventDefault();
        API.createHoliday(values)
            .then((res) =>{
                if (res.status === 201){
                    addHoliday(res.data)
                    // dispatcher(addHoliday(res.data))
                    setOpenModal(false)
                }
                console.log(res.data)

            })
    }
    const editHolidaySubmit = (e) => {
        e.preventDefault();

        API.editHoliday(editHoliday.id, values)
            .then((res) => {
                console.log(res.data)
                if(res.status === 200) {
                    isEditHoliday(res.data)
                    setEditHoliday(null)
                }

            })
            .catch((error) => {
                console.log(error.response)
            })
    }




    return (
        <div className={css.holiday__form} style={{ top:openModal||editHoliday?0:'-1000%' }}>

            <form onSubmit={editHoliday?editHolidaySubmit:submit} className={css.content}>
                <div className={css.close} onClick={() => setOpenModal(false)||setEditHoliday(null)}>
                    <img src="/images/x.svg" alt="close"/>
                </div>
                <label className={css.name__holiday}>
                    <p>Название праздника</p>
                    <input  className={css.input} type="text" value={values.name}
                            onChange={(e) =>  setValues({...values, name: e.target.value})}/>
                </label>
                <div className={css.date}>
                    <input type="number"
                           value={values.day}
                           onChange={(e)=> setValues({...values,day: e.target.value})} className={css.input}/>
                    <input type="text"
                           value={values.month}
                           onChange={(e)=> setValues({...values,month: e.target.value})}
                           className={css.input}/>
                </div>
                <div className={css.btn}>
                    <Button save={'Сохранить'}/>
                </div>
            </form>
        </div>
    )
};