import Link from "next/link";

function Sidebar({id}) {
    return (
        <aside className="p-6 bg-purpleWhite sidebar h-screen relative top-26 left-0 py-5 w-full max-w-xs ">
            {!id?
            <nav className="space-y-8 text-sm mt-16">
                <div className="space-y-2">
                    <div className="flex flex-col space-y-1 text-purpleDark font-semibold gap-6 text-xl">
                        <Link href="/dashboard/profile">
                            <div className="cursor-pointer flex items-center">
                                <img src="/images/home.svg" alt="home" className="mr-4"/>
                            <p>Личный кабинет</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/friends">
                            <div className="cursor-pointer flex items-center">
                                <img src="/images/friends.svg" alt="home" className="mr-4"/>
                                <p>Мои друзья</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/holidays">
                            <div className="cursor-pointer flex items-center">
                                <img src="/images/party.svg" alt="home" className="mr-4"/>
                                <p>Мои праздники</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/wishlist">
                            <div className="cursor-pointer flex items-center">
                                <img src="/images/giftsidebar.svg" alt="home" className="mr-4"/>
                                <p>Мой список желаний</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/basket">
                            <div className="cursor-pointer flex items-center">
                                <img src="/images/basketsidebar.svg" alt="home" className="mr-4"/>
                                <p>Корзина</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
            :
                <nav className="space-y-8 text-sm mt-16">
                    <div className="space-y-2">
                        <div className="flex flex-col space-y-1 text-purpleDark font-semibold gap-6 text-xl">
                            <Link href={`/user/${id}`}>
                                <div className="cursor-pointer flex items-center">
                                    <img src="/images/home.svg" alt="home" className="mr-4"/>
                                    <p>Личный кабинет</p>
                                </div>
                            </Link>
                            <Link href={`/user/${id}/menu/friends`}>
                                <div className="cursor-pointer flex items-center">
                                    <img src="/images/friends.svg" alt="home" className="mr-4"/>
                                    <p>Друзья</p>
                                </div>
                            </Link>
                            <Link href={`/user/${id}/menu/holidays`}>
                                <div className="cursor-pointer flex items-center">
                                    <img src="/images/party.svg" alt="home" className="mr-4"/>
                                    <p>Праздники</p>
                                </div>
                            </Link>
                            <Link href={`/user/${id}/menu/wishes`}>
                                <div className="cursor-pointer flex items-center">
                                    <img src="/images/giftsidebar.svg" alt="home" className="mr-4"/>
                                    <p>Cписок желаний</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            }
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
