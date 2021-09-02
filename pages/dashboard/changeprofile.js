import React, {useState} from 'react';
import Sidebar from "../../components/sidebar";
import API from "../api/index";
import withAuth from "../../HOC/withAuth";
import {FillingData} from "../fillingdata/FiilingData";

function Changeprofile() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const submit = (e) => {
        e.preventDefault();
        API.resetEmail({
            new_email: email,
            current_password: password,
        })
    }
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col justify-center w-full">
                <FillingData />
                <form onSubmit={submit} className="flex">
                    <input value={email} onChange={(e) =>  setEmail(e.target.value)} type="email"/>
                    <input value={password} onChange={(e) =>  setPassword(e.target.value)} type="password"/>
                    <button>save</button>
                </form>
            </div>

        </div>
    );
}

export default withAuth(Changeprofile);