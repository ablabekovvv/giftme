import Link from "next/link";
import Logo from "../public/images/logo.svg"

function Sidebar() {
    return (
        <aside className="p-6 bg-purpleWhite sidebar h-screen relative top-26 left-0 py-5 w-full max-w-xs ">
            <nav className="space-y-8 text-sm mt-16">
                <div className="space-y-2">
                    <div className="flex flex-col space-y-1 text-purpleDark font-semibold gap-6 text-xl">
                        <Link href="/dashboard/profile">
                            <div className="cursor-pointer">
                            <p>Личный кабинет</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/basket">
                            <div className="cursor-pointer">
                                <p>Мои друзья</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/basket">
                            <div className="cursor-pointer">
                                <p>Мои праздники</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/wishlist">
                            <div className="cursor-pointer">
                                <p>Мой список желаний</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/basket">
                            <div className="cursor-pointer">
                                <p>Корзина</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="mt-24">
            <button
                className="w-full text-center py-2 rounded bg-purpleDark text-white content-center rounded-3xl "
            >Поделиться
            </button>
            </div>
        </aside>
    );
}

export default Sidebar;