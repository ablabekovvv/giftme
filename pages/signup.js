import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import showPwdImg from "../public/images/showpassword.svg";
import hidePwdImg from "../public/images/showpassword.svg";
import API from "../pages/api/index"
import { useRouter } from 'next/router'
import withAuth from "../HOC/withAuth"
import withAuthPublic from "../HOC/withAuthPublic";
import {Head} from "next/document";


function Signup() {
    const [password, setPassword] = useState('');
    const [confirmPassword, confirmSetPassword] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("")
    const [errorPassword, serErrorPassword] = useState("")
    const router = useRouter()

    const submit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
        }
        API.createUser(user)
            .then((res) => {
                if(res.status === 201){
                    router.push("/login")
                }
            })
            .catch((err) => {
                setError(err.response.data.email)
                serErrorPassword(err.response.data.password)
            })
    }
    return (
        <div>
            <div className="flex flex-col ">
                <div className="container mt-28 max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center ">
                    <div className="bg-purple px-6 py-8 rounded shadow-md text-black w-full px-32">
                        <h1 className="mb-2 mt-32 text-3xl text-center font-semibold">Регистрация</h1>
                        <div className="mx-auto text-center mb-16 ">
                            Регистрация через &nbsp;
                            <a className="no-underline border-b border-blue text-primary cursor-pointer">
                                Gmail
                            </a>
                        </div>
                        <form onSubmit={submit}>
                        <div className="max-w-xl mx-12">
                        <input
                            type="email"
                            className="block border-none w-full p-3 rounded-2xl mb-11"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"/>
                        </div>

                        <div className="flex items-center justify-end mb-2 max-w-xl mx-12">
                        <input
                            placeholder="Пароль"
                            className="block border-none w-full p-3 rounded-2xl relative"
                            type={isRevealPwd ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                            <div className="absolute transform -translate-x-4">
                        <Image
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            className="absolute items-center transform translate-y-1"
                            src={isRevealPwd ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                            width={24}
                            height={24}
                        />
                            </div>
                        </div>
                            {errorPassword&& errorPassword.map((item,index) => <p className="flex-col mb-2 ml-12 text-red font-semibold">{errorPassword[index]}</p>)}
                        <div className="flex items-center justify-end mb-10 max-w-xl mx-12 mt-6">
                        <input
                            name="pwd"
                            placeholder="Потвердить пароль"
                            className="block border-none w-full p-3 rounded-2xl rounded"
                            type={isRevealPwd ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => confirmSetPassword(e.target.value)}
                        />
                            <div className="absolute transform -translate-x-4">
                        <Image
                            className="absolute transform translate-y-1"
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={isRevealPwd ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                            width={24}
                            height={24}
                        />
                        </div>
                        </div>

                            {error&&<p className="text-center font-semibold text-red mb-12">{error}</p>}
                        <button
                            type="submit"
                            className="w-3/6 mx-44 rounded-3xl text-center py-3 rounded bg-primary text-white content-center"
                        >Зарегистрироваться
                        </button>
                        </form>

                        <Link href="/login"><div className="text-grey-dark mt-6 text-center">
                            Есть аккаунт? &nbsp;
                            <a className="no-underline border-b border-blue text-primary cursor-pointer">
                                Войти
                            </a>
                        </div></Link>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default withAuthPublic(Signup);

