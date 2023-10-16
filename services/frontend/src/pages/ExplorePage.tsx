import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ExplorePage.css";

const ExplorePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMyBureauTextClick = useCallback(() => {
    navigate("/my-bureau");
  }, [navigate]);

  return (
    <div className="explore-page">
      <div className="explore-page-child" />
      <div className="explore-page-item" />
      <div className="watalii-121" />
      <img className="watalii-2-icon11" alt="" src="/watalii-2@2x.png" />
      <div className="home25">Home</div>
      <div className="services30">Services</div>
      <div className="my-bureau27" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us22">Contact Us</div>
      <div className="discover-nature-beauty-container3">
        <p className="discover-nature-beauty3">Discover Nature Beauty</p>
        <p className="discover-nature-beauty3">With Us</p>
      </div>
      <div className="welcome-to-watalii3">Welcome to Watalii</div>
      <div className="explore-wrapper">
        <b className="explore">{`Explore `}</b>
      </div>
      <div className="we-offer-you3">
        We offer you the best travel rates to conveniently enhance your travel
        Comfort. Our Secure and user - friendly transaction system allows you to
        seamlessly convert your funds from your Bank account to the Local
        Currency, Ensuring a Safe and hassle-free experience
      </div>
      <img className="space-x-14" alt="" src="/space-x-1@2x.png" />
      <img className="dove1-1-icon4" alt="" src="/dove1-1@2x.png" />
      <img
        className="material-symbolsmore-up-icon6"
        alt=""
        src="/materialsymbolsmoreup1.svg"
      />
      <div className="download-5-1-parent">
        <img className="download-5-1" alt="" src="/download-5-1@2x.png" />
        <div className="frame-inner" />
        <div className="my-account2">My Account</div>
      </div>
    </div>
  );
};

export default ExplorePage;
