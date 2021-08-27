import Sidebar from "../../components/sidebar";
import withAuth from "../../HOC/withAuth";

function Basket() {
    return (
        <div className="flex">
            <Sidebar />
            <div>

            </div>
        </div>
    );
}

export default withAuth(Basket);