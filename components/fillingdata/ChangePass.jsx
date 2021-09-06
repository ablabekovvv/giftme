import React from 'react';
import css from './fillmodalwin.module.css';
import API from "../../pages/api"
import Close from "../../public/images/x.svg"

export const ChangePass = ({resetPass, setResetPass}) => {
    const [pass,setPass] = React.useState({
        currentpass:'',
        newpass:'',
    })
const submit = (e) =>{
        e.preventDefault();
        const data ={
            'new_password': pass.newpass,
            'current_password': pass.currentpass
        }
        API.createNewPassword(data)
            .then((res) => {
                console.log(res)
            })
            .catch((error) =>{
                console.log(error.response)
            })

}
    return (
        <div className={css.changepass} style={{top:resetPass?0:'1000%'}} >
            <form className={css.content} style={{left:resetPass?'50%':'-9000%'}}
            onSubmit={submit}
            >
                <div className={css.close} onClick={() => setResetPass(false)}>
                    <img src={Close} alt="close"/>
                </div>
                <div className={css.curentpas}>
                    <p>Текущий пароль</p>
                    <input value={pass.currentpass}
                           onChange={(e) =>
                               setPass({...pass, currentpass: e.target.value})}
                           type="password"/>
                </div>
                <div className={css.newpass}>
                    <p>Новый пароль</p>
                    <input value={pass.newpass} onChange={(e) =>
                        setPass({...pass, newpass: e.target.value})} type="password"/>
                </div>
                <div className={css.btn}>
                    <button className={css.change}>Изменить</button>
                    <div className={css.cansel} onClick={() => setResetPass(false)}
                    style={{border: '1px solid #1DB3C3'}}
                    >Отменить</div>
                </div>

            </form>

        </div>
    );
};


