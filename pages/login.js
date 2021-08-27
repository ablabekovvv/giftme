import React, {useEffect, useState} from "react";
import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
import showPwdImg from '../public/images/showpassword.svg';
import hidePwdImg from '../public/images/showpassword.svg';
import API from "./api";
import { useRouter } from 'next/router'
import withAuth from "../HOC/withAuth"
import withAuthPublic from "../HOC/withAuthPublic";
import jwt_decode from "jwt-decode"


function LogIn(props) {
    const [password, setPassword] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("")
    const router = useRouter()
    const submit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
        }
        API.createJWT(user)
            .then((res) => {
                const decode = jwt_decode(res.data?.access)
                props.setIsAuth({...res.data, ...decode})
                router.push("/dashboard/profile")
            })
            .catch((err) => {
                setError(err.response.data.detail)
            })
    }
    return (
        <div>
            <div className="flex flex-col ">
                <div className="mt-28 max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center ">
                    <div className="bg-purple px-6 py-8 rounded shadow-md text-black w-full px-32">
                        <h1 className="mb-2 mt-32 text-3xl text-center font-semibold">Авторизация</h1>
                        <div className="mx-auto text-center mb-16 ">
                            Авторизация через &nbsp;
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
                                name="pwd"
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
                            {error&&<p className="text-center ml-8 text-red transition duration-500">{error}</p>}

                        <div className="text-right mr-14 font-semibold cursor-pointer mb-16">
                            <p>
                                Забыли пароль?
                            </p>

                        </div>

                        <button
                            type="submit"
                            className="w-3/6 mx-48 text-center py-3 rounded bg-primary text-white content-center rounded-3xl transorm -translate-x-16"
                        >Войти
                        </button>
                        </form>
                        <Link href="/signup"><div className="text-grey-dark mt-6 text-center">
                            У вас еще нет аккаунта? <br />
                            <a className="no-underline border-b border-blue text-primary cursor-pointer ">
                                Зарегистрироваться
                            </a>
                        </div></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default withAuthPublic(LogIn);