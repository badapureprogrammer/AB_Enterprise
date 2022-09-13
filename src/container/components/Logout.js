import "../components/cssPages/Login.css";

const LogoutComponent = ()=>{

    return(
        <div className="logout_banner">
            <h3>Welcome <span className="user_name">Arun Anil Badapure</span> !</h3>
            <button className="logout_btn">Logout</button>
        </div>
    )
};
export default LogoutComponent;
