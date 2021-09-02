import React from 'react';
import css from './button.module.css'



const Button = ({save, exit, bigSave, deleteAcc, change, cansel, action, text, width}) => {
    return (
        <>
            {(save) && <button onClick={action} className={css.save} type="submit">{save}</button>}
            {(exit) && <div onClick={action} className={css.exit}>{exit}</div>}
            {(bigSave) && <button onClick={action} className={css.bigsave}>{bigSave}</button>}
            {(deleteAcc) && <button onClick={action} className={css.delete}>{bigSave}</button>}
            {(change) && <button onClick={action} className={css.change}>{change}</button>}
            {cansel &&<div onClick={action} className={css.cansel}>{cansel}</div>}

        </>
    )


};

export default Button;
