import React, {useState} from 'react';
import css from './modaladdwish.module.css'
import Button from "../Buttons/Buttons";
import API from '../../pages/api'
import Input from "../input/Input";
import Plus from "../../public/images/plus.svg"
import Close from "../../public/images/x.svg"
import {useSelector} from "react-redux";


export const ModalAddWish = ({addWish, setAddWish ,onAddWish, editWish, onEditWish, setEditWish}) => {
    const [image, setImage] = React.useState( null);
    // const holidays = useSelector((state) => state.holidays.holiday)
    // console.log(holidays)
    const [value, setValue] = React.useState({
        name: '',
        description: '',
        link: '',
        holiday: '',
        image: ''

    })
    React.useEffect(()=>{
        setValue(editWish)
        setImage({image: editWish?.image})

    },[editWish])

    const fileChange = (e) => {
        if(e.target.files !== null && e.target.files.length){
            const file = e.target.files[0];
            setValue((old) => { return {...old, image:file}})
            const reader = new FileReader();
            reader?.readAsDataURL(file);
            reader.onload = (e) => {
                const newUrl= e.target.result;
               let formData = new FormData();
                setImage({image: newUrl} )
            }
        }
    }

    const submit = (e) => {
        e.preventDefault();
        const data = new FormData()
        for(let key in value){
            data.append(key, value[key])
        }

        API.createWish(data)
            .then((res) => {
                if (res.status === 201)onAddWish(res.data)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    const submitEditWish =(e) =>{
        e.preventDefault();
        const data = new FormData()
        for(let key in value){
            data.append(key, value[key])
        }
        for(let value of data.values()){
        }
        API.editWish(editWish.id, data)
            .then((res) => {
                console.log(res.data)
                if (res.status === 200)onEditWish(res.data)


            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    const onWrite = (e) => {
        setValue((old) => {
            return {...old, [e.target.name]: e.target.value}
        })
    }

    return (
        <div className={css.addwish} style={{top: addWish||editWish? 0 : '-1000%', display:"block"}}>
            <form className={css.content}
                  onSubmit={editWish?submitEditWish:submit}
            >
                <div className={css.close} onClick={() => setAddWish(false) || setEditWish(null)}>
                    <img src={Close} alt="close"/>
                </div>
                <Input value={value?.name}  action={onWrite} label={'Название подарка'} name="name" />
                <Input value={value?.description} name="description"  label={'Описание подарка'} action={onWrite}/>
                <Input value={value?.holiday} name="holiday"  unpen={'Праздник'} action={onWrite}/>
                <Input value={value?.link} name="link"  label={'Ссылка'} action={onWrite}/>
                <div className={css.block__add}>
                    <p>Фото</p>
                  <div className={css.addimage}>
                      <label  className={css.file}>
                          <input className={css.photo}
                                 onChange={fileChange}
                                 type="file"/>
                          <img src={Plus} alt=""/>
                      </label>
                      {image?.image && <img src={image?.image} alt="file"/> }
                  </div>
                </div>
                <div className={css.btn}>
                    {editWish? <Button change={'Изменить'} />:<Button save={'Сохранить'}  />}

                        <Button  cansel={'Отмена'} action={() => setAddWish(false)||setEditWish(null)} />
                </div>

            </form>

        </div>
    );
};


