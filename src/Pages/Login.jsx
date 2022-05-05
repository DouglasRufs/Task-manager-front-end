import CustomButton from "../components/CustomButton";

import logo from "../components/Assets/Images/logo-2.png";
import "./Login.scss";

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

export default login;
