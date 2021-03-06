import React from 'react';
import css from "./mywish.module.css";
import API from '../../pages/api'
import Pen from "../../public/images/home.svg"
import Star from "../../public/images/star.svg"

export const Card = ({onDelete, id, image,name,description,link, wish, setEditWish, setIsGivePresent, userId}) => {
    const deleteWish = () => {
        API.deleteWish(id)
            .then((res) => {
                if(res.status === 204) onDelete(id)

            })
            .catch((error) => {
                console.log(error.response)
            })

    }

    return (
        <div className={css.column}>
            <div className={css.left}>
                <div className={css.image}>
                    <img src={image||"/images/card.svg"} alt="card"/>
                </div>
                <div className={css.texts}>
                    <h5>{name||'unknoun'}</h5>
                    <p> {description||'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, iusto!'} </p>
                    <a href={link||'https://www.thingstogetme.com/177412af2132'}
                       target="_blank">{link||'https://www.thingstogetme.com/177412af2132'}</a>
                    <p>дата</p>
                </div>
            </div>
            <div className={css.right}>
                <div className={css.checked}>
                    {<img className={css.star} src="/images/star.svg" alt="Star"/>}
                </div>
                {!userId &&
                <div className={css.dropdown}>
                    <img className={css.pen} src="/images/pen.svg" alt="pen"/>

                    <div className={css.choise}>
                        <div className={css.change} onClick={() => setEditWish(wish)}>Изменить</div>
                        <div className={css.delete} onClick={deleteWish}>Удалить</div>
                    </div>
                </div>}

            </div>
        </div>

    );
};

