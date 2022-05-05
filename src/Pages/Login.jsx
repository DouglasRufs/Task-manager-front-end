import CustomButton from "../components/CustomButton";

import logo from "../components/Assets/Images/download.png";
import "./login.scss";

const login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="Task manager" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};
