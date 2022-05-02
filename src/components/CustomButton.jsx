import "./StyleComponents/CustomButton";

const CustomButton = ({ children }) => {
    <div className="custom-button-container" onClick={onClick}>
        {children}
    </div>;
};

export default CustomButton;
