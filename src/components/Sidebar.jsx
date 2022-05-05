import { useNavigate } from "react-router-dom";

import CustomButton from "./CustomButton";

import "./StyleComponents/Sidebar.scss";
import logo from "../components/Assets/Images/download.png";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSigOutClick = () => {
        navigate("/Login");
    };

    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Logo React" srcset="" />
            </div>
            <div className="sign-out">
                <CustomButton onClick={handleSigOutClick}>Sair</CustomButton>
            </div>
        </div>
    );
};
export default Sidebar;
