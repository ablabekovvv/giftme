import Image from "next/image";
import Logo from "../public/images/logo.svg"
import Link from "next/link";
import Notification from "../public/images/notification.svg"
import Basket from "../public/images/basket.svg"

function Header(props) {

    return (
        <div className="bg-primary">
            <div className="container mx-auto py-5 flex justify-between items-center">

                <Link href="/">
                    <div className="cursor-pointer ml-10">
                        <Image src={Logo} width={116} height={29} layout="fixed" />
                    </div>
                </Link>
                {/*Right*/}

                <nav className='text-white'>
                    <ul className="flex items-center">
                        <Link href="/"><li className="cursor-pointer mr-10 font-normal text-lg">О нас</li></Link>
                        {
                            !props.isAuth ?
                                <>
                                    <Link href='/signup'>
                                    <li className="cursor-pointer py-1.5 px-6 rounded-3xl border border-white font-medium text-lg mr-6">Регистрация</li>
                                </Link>
                                    <Link href='/login'>
                                        <li className="cursor-pointer text-lg mr-10">Войти</li>
                                    </Link>
                                </> :
                                <>
                                <li className="cursor-pointer mr-10 font-light text-lg">Друзья</li>
                                    <Link href="/dashboard/profile"><li className="cursor-pointer mr-10 font-light text-lg">Мой личный кабинет</li></Link>
                                    <div className="mr-10 mt-2 cursor-pointer">
                                    <Image src={Notification} width={27} height={27} layout="fixed" />
                                    </div>
                                <div className="mr-10 mt-2 cursor-pointer bg-yellow py-2 px-4 rounded-full">
                                    <Image src={Basket} width={30} height={30} layout="fixed" />
                                </div>
                                <div onClick={() => props.setIsAuth(null)}>
                            <Link href='/'>
                                    <li className="cursor-pointer py-1.5 px-6 rounded-3xl border border-white font-medium text-lg mr-6">Выйти</li>
                                </Link>
                                </div>
                                </>
                        }

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;