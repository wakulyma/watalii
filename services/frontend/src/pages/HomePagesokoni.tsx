import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePagesokoni.css";

const HomePagesokoni: FunctionComponent = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/services-pay");
  }, [navigate]);

  const onMyBureauTextClick = useCallback(() => {
    navigate("/my-bureau");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  return (
    <div className="home-pagesokoni">
      <div className="home-pagesokoni-child" />
      <div className="home-pagesokoni-item" />
      <div className="watalii-15" />
      <img className="watalii-2-icon2" alt="" src="/watalii-2@2x.png" />
      <div className="services5" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="my-bureau5" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="home6" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="contact-us5">Contact Us</div>
      <div className="discover-nature-beauty-container1">
        <p className="discover-nature-beauty1">Discover Nature Beauty</p>
        <p className="discover-nature-beauty1">With Us</p>
      </div>
      <div className="welcome-to-watalii1">Welcome to Watalii</div>
      <div className="we-offer-you1">
        We offer you the best travel rates to conveniently enhance your travel
        Comfort. Our Secure and user - friendly transaction system allows you to
        seamlessly convert your funds from your Bank account to the Local
        Currency, Ensuring a Safe and hassle-free experience
      </div>
      <img className="space-x-11" alt="" src="/space-x-1@2x.png" />
      <img className="dove1-1-icon1" alt="" src="/dove1-1@2x.png" />
      <img
        className="material-symbolsmore-up-icon2"
        alt=""
        src="/materialsymbolsmoreup1.svg"
      />
      <b className="my-wallet7" onClick={onMyWalletTextClick}>
        My Wallet
      </b>
      <b className="transaction-history5">Transaction History</b>
      <div className="rectangle-group" onClick={onGroupContainerClick}>
        <div className="group-item" />
        <b className="sokoni7">Sokoni</b>
      </div>
      <div className="home7">Home</div>
      <div className="home8">Home</div>
      <img className="op-1-icon5" alt="" src="/op-1@2x.png" />
    </div>
  );
};

export default HomePagesokoni;
