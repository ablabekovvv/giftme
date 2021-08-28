import Sidebar from "../../components/sidebar";
import withAuth from "../../HOC/withAuth";
import BasketCard from "../../components/BasketCard";

function Basket() {
    return (
        <div className="flex container">
            <Sidebar/>
            <div className="w-full max-w-4xl mt-20 mx-auto">
                <div className="flex justify-center gap-10 items-center">
                    <h2 className="font-semibold tracking-widest text-4xl text-purpleDark">Корзина</h2>
                </div>
                <BasketCard />
            </div>
        </div>
    );
}

export default withAuth(Basket);