import CustomButton from "./CustomButton";

import "./StyleComponents/Sidebar.scss";
import logo from "../components/Assets/Images/download.png";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Logo React" srcset="" />
            </div>
            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};
export default Sidebar;
