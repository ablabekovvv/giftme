import React from 'react';
import css from "./fillmodalwin.module.css";
import API from '../api/index';
import Close from "../../public/images/x.svg"

export const DeleteAccont = ({deletePass, setDeletePass}) => {
    const [pass,setPass] = React.useState('')
    const submit = (e) =>{
        e.preventDefault();
        API.deleteAccount({"current_password":pass})
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    return (
        <div className={css.changepass} style={{top:deletePass?0:'1000%'}} >
            <form className={css.content} style={{left:deletePass?'50%':'-9000%'}}
                  onSubmit={submit}
            >
                <div className={css.close} onClick={() => setDeletePass(false)}>
                    <img src={Close} alt="close"/>
                </div>
                <div className={css.curentpas}>
                    <p>Введите пароль</p>
                    <input value={pass}
                           onChange={(e) =>
                               setPass(e.target.value)}
                           type="password"/>
                </div>
                <div className={css.btn}>
                    <button className={css.change}>Удалить</button>
                    <div className={css.cansel} onClick={() => setDeletePass(false)} style={{border: '1px solid #1DB3C3'}}>Отменить</div>
                </div>

            </form>

        </div>
    );
};


