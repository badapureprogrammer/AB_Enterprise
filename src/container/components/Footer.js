import "../components/cssPages/Footer.css";

const FooterComponent = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row firstRow py-4">
          <div className="col-md-4">
            <h3>Location</h3>
            <p>
              2215 John Daniel Drive Clark,
              <br /> MO 65243
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="">AROUND THE WEB</h3>
            <i className="fa-brands fa-facebook-f setIcons p-2 my-2 mx-1"></i>
            <i className="fa-brands fa-twitter setIcons p-2 my-2 mx-1"></i>
            <i className="fa-brands fa-linkedin-in setIcons p-2 my-2 mx-1"></i>
            <i className="fa-brands fa-instagram setIcons p-2 my-2 mx-1"></i>
          </div>
          <div className="col-md-4">
            <h3>About AB Enterprise</h3>
            <p>
              Freelance is a free to use, MIT licensed <br />
              AB Enterprise theme created by{" "}
              <span style={{ color: " #1abc9c" }}>Arun Badapure.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row secondrow">
        <div className="col-12">Copyright © Your Website 2023</div>
      </div>
    </>
  );
};
export default FooterComponent;
