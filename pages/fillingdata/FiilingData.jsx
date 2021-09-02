import React from 'react';
import css from './fillingdata.module.css'
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {ChangePass} from "./ChangePass";
import {DeleteAccont} from "./DeleteAccont";
// import Link from "next/link";
import API from '../api/index'
import {Link} from "@material-ui/core";
import Pen from "../../public/images/pen.svg"

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 162,
        maxWidth: 162,

    },
    input: {
        borderRadius: 10,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    },
}));

export const FillingData = () => {
    const classes = useStyles();
    const [day, setDay] = React.useState('');
    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };
    const [mounth, setMounth] = React.useState('');
    const handleChangeMounth = (event) => {
        setMounth(event.target.value);
    };
    const [year, setYear] = React.useState('');
    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };
    const [value, setValue] = React.useState({
        first_name: '',
        last_name: '',
        description: '',
        facebook_link: '',
        instagram_link: '',
    })
    const changeValue = (e) => {
        setValue((old) => {
            return {
                ...old,
                [e.target.name]: e.target.value
            }
        })
    }
    const [resetPass, setResetPass] = React.useState(false);
    const [deletePass, setDeletePass] = React.useState(false);
    const submit = (e) => {
        e.preventDefault();
        setPending(true);
        const id = JSON.parse(localStorage.getItem('user'))?.user_id;
        API.editUserMe(value,id)
            .then((res) => {
                setPending(false)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error.response)
            })

    }
    const [pending, setPending] = React.useState(false)



    return (
        <div className={`container ${css.filling}`}>
            <form className={css.form} onSubmit={submit}>
                <label className={css.label}>
                    <p>Имя</p>
                    <input
                        value={value.first_name} name="first_name"
                        onChange={changeValue}
                        className={css.input} type="text"/>
                    <img src={Pen} alt="pen"/>
                </label>
                <label className={css.label} >
                    <p>Фамилия</p>
                    <input
                        value={value.last_name} name="last_name"
                        onChange={changeValue}
                        className={css.input} type="text"/>
                    <img src={Pen} alt="pen"/>
                </label>

                <div className={`${css.date}`}>
                    <p>День рождения</p>
                    <div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">день</InputLabel>
                            <Select className={classes.input}
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={day}
                                    onChange={handleChangeDay}
                                    label="Age"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">месяц</InputLabel>
                            <Select
                                className={classes.input}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={mounth}
                                onChange={handleChangeMounth}
                                label="Age"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">год</InputLabel>
                            <Select
                                className={classes.input}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={year}
                                onChange={handleChangeYear}
                                label="Age"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <label>
                    <p>О себе</p>
                    <textarea
                        value={value.description} name="description"
                        onChange={changeValue}
                        id="" cols="30" rows="4" className={css.textarea}>12</textarea>
                    <p className={css.textare__desc}>140 символов</p>
                </label>
                <label className={css.label}>
                    <p>Facebook</p>
                    <input
                        value={value.facebook_link} name="facebook_link"
                        onChange={changeValue}
                        className={css.input} type="text"/>
                    <img src={Pen} alt="pen"/>
                </label>
                <label className={css.label} >
                    <p>Instagram</p>
                    <input
                        value={value.instagram_link} name="instagram_link"
                        onChange={changeValue}
                        className={css.input} type="text"/>
                    <img src={Pen} alt="pen"/>
                </label>
                <div className={css.btn}>
                    <Link href="/dashboard/profile">
                        <div className={css.out}>Выйти</div>
                    </Link>

                    <button className={css.out} style={{background: "#FFCA12"}}>Сохранить</button>
                </div>
            </form>
            <div className={css.choise}>
                <p className={css.text} style={{textDecoration: "underline"}}
                   onClick={() => setResetPass(true)}>Изменить пароль</p>
                <p className={css.text} style={{color: "#FF0000"}} onClick={() => setDeletePass(true)}>Удалить
                    аккаунт</p>
            </div>
            <ChangePass resetPass={resetPass} setResetPass={setResetPass}
            />
            <DeleteAccont deletePass={deletePass} setDeletePass={setDeletePass}/>
        </div>
    );
};


