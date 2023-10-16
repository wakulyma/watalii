import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePagetransactionHistory.css";

const HomePagetransactionHistory: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services-pay");
  }, [navigate]);

  const onMyBureauTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="home-pagetransaction-history">
      <div className="home-pagetransaction-history-child" />
      <div className="home-pagetransaction-history-item" />
      <div className="watalii-14" />
      <img className="watalii-2-icon1" alt="" src="/watalii-2@2x.png" />
      <div className="discover-nature-beauty-container">
        <p className="discover-nature-beauty">Discover Nature Beauty</p>
        <p className="discover-nature-beauty">With Us</p>
      </div>
      <div className="welcome-to-watalii">Welcome to Watalii</div>
      <div className="we-offer-you">
        We offer you the best travel rates to conveniently enhance your travel
        Comfort. Our Secure and user - friendly transaction system allows you to
        seamlessly convert your funds from your Bank account to the Local
        Currency, Ensuring a Safe and hassle-free experience
      </div>
      <img className="space-x-1" alt="" src="/space-x-1@2x.png" />
      <img className="dove1-1-icon" alt="" src="/dove1-1@2x.png" />
      <img
        className="material-symbolsmore-up-icon1"
        alt=""
        src="/materialsymbolsmoreup1.svg"
      />
      <b className="my-wallet6" onClick={onMyWalletTextClick}>
        My Wallet
      </b>
      <div className="rectangle-parent">
        <div className="group-child" />
        <b className="transaction-history4">Transaction History</b>
      </div>
      <b className="sokoni6" onClick={onSokoniTextClick}>
        Sokoni
      </b>
      <div className="home4">Home</div>
      <div className="services4" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau4" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="home5" onClick={onHomeText1Click}>
        Home
      </div>
      <div className="contact-us4">Contact Us</div>
      <img className="op-1-icon4" alt="" src="/op-1@2x.png" />
    </div>
  );
};

export default HomePagetransactionHistory;
