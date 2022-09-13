import errorImg from "../images/page-found-cartoon-man.jpg";

const ErrorComponent = () => {
    
  return (
    <>
      <div className="container d-flex justify-content-center">
        <img src={errorImg} style={{width:"fit-content"}} />
      </div>
    </>
  );
};
export default ErrorComponent;