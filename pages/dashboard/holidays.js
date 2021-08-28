import withAuth from "../../HOC/withAuth";
import Sidebar from "../../components/sidebar";
import HolidayCard from "../../components/HolidayCard";

function Holidays() {
    return (
        <div className="flex container">
            <Sidebar/>
            <div className="w-full max-w-4xl mt-20 mx-auto">
                <div className="flex justify-between gap-10 items-center">
                    <h2 className="font-semibold tracking-widest text-3xl text-black">Ваши праздники</h2>
                    <button
                        className="flex w-64 text-center py-2 rounded bg-btnPurple text-black content-center rounded-3xl font-semibold items-center justify-center text-"
                    ><span className="text-3xl font-bold mr-4">+</span> Добавь праздник
                    </button>
                </div>
                <div>
                    <HolidayCard />
                </div>
            </div>
        </div>
    );
}

export default withAuth(Holidays);