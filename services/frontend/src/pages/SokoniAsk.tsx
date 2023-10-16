import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SokoniAsk.css";

const SokoniAsk: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services-pay");
  }, [navigate]);

  const onMyBureauTextClick = useCallback(() => {
    navigate("/my-bureau");
  }, [navigate]);

  const onSokoniTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onSokoniText1Click = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onTravelPackagesTextClick = useCallback(() => {
    navigate("/sokoni-travel-package");
  }, [navigate]);

  const onRecommendedAreasTextClick = useCallback(() => {
    navigate("/sokoni-recommended-areas");
  }, [navigate]);

  const onTransportTextClick = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  const onAskTextClick = useCallback(() => {
    navigate("/sokoni-ask");
  }, [navigate]);

  return (
    <div className="sokoni-ask">
      <div className="sokoni-ask-child" />
      <div className="sokoni-ask-item" />
      <div className="watalii-1" />
      <div className="home" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services" onClick={onServicesTextClick}>
        Services
      </div>
      <img
        className="sneha-cecil-yucizaievj8-unspla-icon"
        alt=""
        src="/snehacecilyucizaievj8unsplash-1@2x.png"
      />
      <div className="my-bureau" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us">Contact Us</div>
      <div className="sokoni" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className="my-wallet" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div
        className="transaction-history"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <b className="sokoni1" onClick={onSokoniText1Click}>
        Sokoni
      </b>
      <div className="sokoni-ask-inner" />
      <img
        className="material-symbolsmore-up-icon"
        alt=""
        src="/materialsymbolsmoreup.svg"
      />
      <img className="icround-refresh-icon" alt="" src="/icroundrefresh.svg" />
      <img className="op-1-icon" alt="" src="/op-1@2x.png" />
      <img className="op-2-icon" alt="" src="/op-2@2x.png" />
      <img className="line-icon" alt="" src="/line-2.svg" />
      <b className="myai">MyAI</b>
      <div className="fluentchat-20-regular" />
      <div className="rectangle-div" />
      <div className="sokoni-ask-child1" />
      <div className="hello-how-may">
        Hello, How May I be of assistance to you?
      </div>
      <div className="im-lost-in">I’m Lost in My own Cocoon, Kindly Help</div>
      <img className="ggbot-icon" alt="" src="/ggbot.svg" />
      <img className="watalii-3-icon" alt="" src="/watalii-3@2x.png" />
      <div className="travel-packages" onClick={onTravelPackagesTextClick}>
        Travel Packages
      </div>
      <div className="recommended-areas" onClick={onRecommendedAreasTextClick}>
        Recommended Areas
      </div>
      <div className="transport" onClick={onTransportTextClick}>
        Transport
      </div>
      <div className="accommodation">Accommodation</div>
      <b className="ask" onClick={onAskTextClick}>
        Ask
      </b>
    </div>
  );
};

export default SokoniAsk;
