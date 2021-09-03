import React from 'react';
import css from './input.module.css'
import Pen from "../../public/images/home.svg"

const Input = ({label , height=50, action, value, name,  type='text',unpen}) => {
    return (
        <>
            {label &&
            <label className={css.label} >
                {label === '*'? <p className={css.requiet} >{label}</p>:<p className={css.text}>{label}</p>}
                <input className={css.input} type={type}
                       style={{height:height}}
                       onChange={(e) => action(e)} value={value} name={name } />
                <img src={Pen} alt=" Pen"  />
            </label>}
            {unpen&&<label className={css.label} >
                {unpen === '*'? <p className={css.requiet} >{unpen}</p>:<p className={css.text}>{unpen}</p>}
                <input className={css.input} type={type}
                       style={{height:height}}
                       onChange={(e) => action(e)} value={value} name={name } />
            </label>}
        </>
    );
};

export default Input;
