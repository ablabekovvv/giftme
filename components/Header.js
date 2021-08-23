import Image from "next/image";
import Logo from "../public/images/logo.svg"
import Link from "next/link";

function Header() {
    return (
        <div className="bg-primary">
            <div className="container mx-auto py-5 flex justify-between items-center">
            {/*Left*/}
                <Link href="/">
            <div className="cursor-pointer">
                <Image src={Logo} width={116} height={29} layout={"fixed"}/>
            </div>
                </Link>
            {/*Right*/}

            <nav className='text-white'>
                <ul className="flex items-center">
                    <li className="cursor-pointer mr-10 font-normal text-lg">О нас</li>
                    <Link href='/signup'><li className="cursor-pointer py-1.5 px-6 rounded-3xl border border-white font-medium text-lg mr-6">Регистрация</li></Link>
                    <li className="cursor-pointer text-lg mr-10">Войти</li>
                </ul>
            </nav>
            </div>
        </div>
    );
}

export default Header;