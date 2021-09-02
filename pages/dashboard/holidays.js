import withAuth from "../../HOC/withAuth";
import Sidebar from "../../components/sidebar";
import HolidayCard from "../../components/HolidayCard";
import React, {useState, useEffect} from "react";
import API from "../api/index"
import Modal from '@material-ui/core/Modal';
import {Button, TextField} from "@material-ui/core";

function Holidays() {
    const [isPending, setIsPending] = useState(true);
    const [holidays, setHolidays] = useState([]);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");

    const handleClose = () => {
        setOpen(!open)
    }

    const submit = (e) => {
        e.preventDefault();
        setOpen(false);
        API.createHoliday({
            name: name
        })
            .then((res) => {
                setHolidays([...holidays, res.data])
            })
    }
    useEffect(() => {
        API.getMyHolidays()
            .finally(() => setIsPending(false))
            .then((res) => {
                setHolidays(res.data)
            })
    }, [])
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
    if(isPending) return <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
    return (
        <div className="flex container">
            <Sidebar/>
            <div className="w-full max-w-4xl mt-20 mx-auto">
                <div className="flex justify-between gap-10 items-center mb-12">
                    <h2 className="font-semibold tracking-widest text-3xl text-black">Ваши праздники</h2>
                    <button
                        className="flex w-64 text-center py-2 rounded bg-btnPurple text-black content-center rounded-3xl font-semibold items-center justify-center"
                        onClick={() => setOpen(true)} ><span className="text-3xl font-bold mr-4">+</span> Добавь праздник
                    </button>
                </div>
                <div>
                {
                    !holidays.length && <h2>Нет праздников</h2>
                }
                {
                    holidays.map((item) => <HolidayCard name={item.name} />)
                }
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <form onSubmit={submit}>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
                        <Button type="submit" variant="contained" color="primary">
                            Сохранить
                        </Button>
                    </form>
                </Modal>
            </div>
        </div>
    );
}

export default withAuth(Holidays);