import React from 'react';
import css from '../styles/404.module.css'

export default function Custom404() {
    return (
        <div className='container'>
            <div className={css.content}>
                <div className={css.left}>
                    <h2>Ой!</h2>
                    <h3>
                        ПЕЙДЖ
                        <br/>
                        НОТ
                        <br/>
                        ФАУНД</h3>
                    <p>Ошибка 404. Такая страница не существует
                        либо она была удалена. </p>
                    <div className={css.btn}>На главную</div>
                </div>
                <div className={css.right}>
                    <img src="/images/404.svg" alt="404"/>
                </div>
            </div>

        </div>
    );
};
