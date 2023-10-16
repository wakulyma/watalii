import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SokoniTransport.css";

const SokoniTransport: FunctionComponent = () => {
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

  const onTransportText1Click = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  const onAccommodationTextClick = useCallback(() => {
    navigate("/sokoni-accommodation");
  }, [navigate]);

  const onAskTextClick = useCallback(() => {
    navigate("/sokoni-ask");
  }, [navigate]);

  const onTypeTextClick = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  const onRequestTextClick = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  return (
    <div className="sokoni-transport">
      <div className="sokoni-transport-child" />
      <div className="sokoni-transport-item" />
      <div className="watalii-113" />
      <div className="home16" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services19" onClick={onServicesTextClick}>
        Services
      </div>
      <img
        className="sneha-cecil-yucizaievj8-unspla-icon2"
        alt=""
        src="/snehacecilyucizaievj8unsplash-1@2x.png"
      />
      <div className="my-bureau16" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us13">Contact Us</div>
      <div className="sokoni17" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className="my-wallet14" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div
        className="transaction-history12"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <b className="sokoni18" onClick={onSokoniText1Click}>
        Sokoni
      </b>
      <div className="sokoni-transport-inner" />
      <img
        className="icround-refresh-icon2"
        alt=""
        src="/icroundrefresh1.svg"
      />
      <img className="op-1-icon12" alt="" src="/op-1@2x.png" />
      <img className="sokoni-transport-child1" alt="" src="/line-2.svg" />
      <div className="fluentchat-20-regular2" />
      <img className="watalii-3-icon6" alt="" src="/watalii-3@2x.png" />
      <div className="travel-packages2" onClick={onTravelPackagesTextClick}>
        Travel Packages
      </div>
      <div className="recommended-areas2" onClick={onRecommendedAreasTextClick}>
        Recommended Areas
      </div>
      <b className="transport3" onClick={onTransportTextClick}>
        Transport
      </b>
      <div className="transport4" onClick={onTransportText1Click}>
        Transport
      </div>
      <div className="accommodation2" onClick={onAccommodationTextClick}>
        Accommodation
      </div>
      <div className="ask2" onClick={onAskTextClick}>
        Ask
      </div>
      <div className="sokoni-transport-child2" />
      <div className="sokoni-transport-child3" />
      <img className="icon-parkdown4" alt="" src="/iconparkdown.svg" />
      <div className="type1" onClick={onTypeTextClick}>
        Type
      </div>
      <div className="request1" onClick={onRequestTextClick}>
        Request
      </div>
    </div>
  );
};

export default SokoniTransport;
