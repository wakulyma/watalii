import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/services-pay");
  }, [navigate]);

  const onMyBureauTextClick = useCallback(() => {
    navigate("/my-bureau");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  return (
    <div className="home-page">
      <div className="home-page-child" />
      <div className="home-page-item" />
      <div className="watalii-17" />
      <img className="watalii-2-icon4" alt="" src="/watalii-2@2x.png" />
      <div className="services7" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau7" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us7">Contact Us</div>
      <div className="discover-nature-beauty-container2">
        <p className="discover-nature-beauty2">Discover Nature Beauty</p>
        <p className="discover-nature-beauty2">With Us</p>
      </div>
      <div className="welcome-to-watalii2">Welcome to Watalii</div>
      <div className="we-offer-you2">
        We offer you the best travel rates to conveniently enhance your travel
        Comfort. Our Secure and user - friendly transaction system allows you to
        seamlessly convert your funds from your Bank account to the Local
        Currency, Ensuring a Safe and hassle-free experience
      </div>
      <img className="space-x-12" alt="" src="/space-x-1@2x.png" />
      <img className="dove1-1-icon2" alt="" src="/dove1-1@2x.png" />
      <img
        className="material-symbolsmore-up-icon3"
        alt=""
        src="/materialsymbolsmoreup1.svg"
      />
      <div className="group-div" onClick={onGroupContainerClick}>
        <div className="group-inner" />
        <b className="my-wallet8">My Wallet</b>
      </div>
      <b
        className="transaction-history6"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </b>
      <b className="sokoni8">Sokoni</b>
      <img className="op-1-icon6" alt="" src="/op-1@2x.png" />
      <div className="home10">Home</div>
    </div>
  );
};

export default HomePage;
