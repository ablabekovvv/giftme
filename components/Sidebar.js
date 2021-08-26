import Link from "next/link";

function Sidebar() {
    return (
        <aside className="w-80 container p-6 bg-purpleWhite sidebar h-screen inset-y-0 left-0 py-5">
            <nav className="space-y-8 text-sm mt-16">
                <div className="space-y-2">
                    <div className="flex flex-col space-y-1">
                        <Link href="#">Installation</Link>
                        <Link href="#">Installation</Link>
                        <Link href="#">Installation</Link>
                        <Link href="#">Installation</Link>
                    </div>
                </div>
            </nav>
            <div className="mt-24">
            <button
                className="w-full text-center py-2 rounded bg-primary text-white content-center rounded-3xl "
            >Поделиться
            </button>
            </div>
        </aside>
    );
}

export default Sidebar;