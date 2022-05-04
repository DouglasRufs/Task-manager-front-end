import Sidebar from "./components/Sidebar";
import Tasks from "./components/tasks";
import "./components/StyleComponents/App.scss";

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <Tasks />
        </div>
    );
};

export default App;
