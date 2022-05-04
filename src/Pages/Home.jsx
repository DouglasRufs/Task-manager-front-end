import Sidebar from "../components/Sidebar";
import Tasks from "../components/tasks";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <Tasks />
        </div>
    );
};
export default Home;
