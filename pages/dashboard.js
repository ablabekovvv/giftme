import withAuth from "../HOC/withAuth";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

function Dashboard() {

    return (
        <div className="flex">
        <Sidebar />
        <div className="mx-auto">
            <Profile />
        </div>
        </div>
    );
}

export default withAuth(Dashboard);