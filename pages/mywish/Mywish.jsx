import React from 'react';
import css from './mywish.module.css'
import {Card} from "./Card";
import {ModalAddWish} from "./ModalAddWish";
import API from '../api/index'
import {useUser} from "../../hooks/hooks";

export const Mywish = () => {
    const [wish, setWish] = React.useState([]);
    const [addWish, setAddWish] = React.useState(false);
    const [editWish, setEditWish] = React.useState(null);
    const {data, isloading} = useUser(API.getWish)

    React.useEffect(()=>{
        setWish(data?.data)
    },[data])
    const onDelete = (id) => {
        setWish(() => wish.filter((item) => item.id !==id))
    }
    const onAddWish = (obj) => {
        setWish((old) =>[...old,obj])
    }
    const onEditWish = (obj) => {
        console.log(obj)
        setWish(() => wish.map((item) => {
            if (item.id === obj.id){
                return obj
            }
            return item
        }  ))
    }

    if (isloading) return <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
    return (
        <div className={css.mywish}>
            <div className={css.content}>
                <div className={css.head}>
                    <h4 className={css.title}>Мой список желаний</h4>
                    <div className={css.add} onClick={() => setAddWish(true)}> &#43; Добавь подарок</div>
                </div>
                <div className={"test"}>
                    {wish?.map((wish) => <Card key={wish.id} {...wish} wish={wish} onDelete={onDelete} setEditWish={setEditWish} />)}
                </div>


            </div>
            <ModalAddWish addWish={addWish} setAddWish={setAddWish} onAddWish={onAddWish}
                           setEditWish={setEditWish}
                           editWish={editWish}
                           onEditWish={onEditWish}
            />
        </div>

    );
};


