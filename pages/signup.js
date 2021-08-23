import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
import showPwdImg from '../public/images/showpassword.svg';
import hidePwdImg from '../public/images/showpassword.svg';


function Signup() {
    const [pwd, setPwd] = useState('');
    const [confirmPwd, confirmSetPwd] = useState('')
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return (
        <div>
            <Header />
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
                        <div className="max-w-xl mx-12">
                        <input
                            type="text"
                            className="block border-none w-full p-3 rounded-2xl mb-11"
                            name="email"
                            placeholder="Email"/>
                        </div>

                        <div className="flex items-center justify-end mb-11 max-w-xl mx-12">
                        <input
                            name="pwd"
                            placeholder="Пароль"
                            className="block border-none w-full p-3 rounded-2xl relative"
                            type={isRevealPwd ? "text" : "password"}
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
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
                        <div className="flex items-center justify-end mb-28 max-w-xl mx-12">
                        <input
                            name="pwd"
                            placeholder="Потвердить пароль"
                            className="block border-none w-full p-3 rounded-2xl rounded"
                            type={isRevealPwd ? "text" : "password"}
                            value={confirmPwd}
                            onChange={e => confirmSetPwd(e.target.value)}
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
                        <button
                            type="submit"
                            className="w-3/6 mx-44 rounded-3xl text-center py-3 rounded bg-primary text-white content-center"
                        >Зарегистрироваться
                        </button>

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

export default Signup;