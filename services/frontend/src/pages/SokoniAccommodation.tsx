import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SokoniAccommodation.css";

const SokoniAccommodation: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services-pay-details");
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
    navigate("/sokoni-accommodation");
  }, [navigate]);

  const onAccommodationTextClick = useCallback(() => {
    navigate("/sokoni-accommodation");
  }, [navigate]);

  const onAskTextClick = useCallback(() => {
    navigate("/sokoni-ask");
  }, [navigate]);

  const onTransportText1Click = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  const onTypeTextClick = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  const onRequestTextClick = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  return (
    <div className="sokoni-accommodation">
      <div className="sokoni-accommodation-child" />
      <div className="sokoni-accommodation-item" />
      <div className="watalii-11" />
      <div className="home1" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services1" onClick={onServicesTextClick}>
        Services
      </div>
      <img
        className="sneha-cecil-yucizaievj8-unspla-icon1"
        alt=""
        src="/snehacecilyucizaievj8unsplash-1@2x.png"
      />
      <div className="my-bureau1" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us1">Contact Us</div>
      <div className="sokoni2" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className="my-wallet1" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div
        className="transaction-history1"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <b className="sokoni3" onClick={onSokoniText1Click}>
        Sokoni
      </b>
      <img className="op-1-icon1" alt="" src="/op-1@2x.png" />
      <img className="sokoni-accommodation-inner" alt="" src="/line-2.svg" />
      <img className="watalii-3-icon1" alt="" src="/watalii-3@2x.png" />
      <div className="travel-packages1" onClick={onTravelPackagesTextClick}>
        Travel Packages
      </div>
      <div className="recommended-areas1" onClick={onRecommendedAreasTextClick}>
        Recommended Areas
      </div>
      <div className="transport1" onClick={onTransportTextClick}>
        Transport
      </div>
      <b className="accommodation1" onClick={onAccommodationTextClick}>
        Accommodation
      </b>
      <div className="ask1" onClick={onAskTextClick}>
        Ask
      </div>
      <div className="sokoni-accommodation-child1" />
      <img
        className="icround-refresh-icon1"
        alt=""
        src="/icroundrefresh1.svg"
      />
      <div className="fluentchat-20-regular1" />
      <div className="transport2" onClick={onTransportText1Click}>
        Transport
      </div>
      <div className="sokoni-accommodation-child2" />
      <img className="icon-parkdown" alt="" src="/iconparkdown.svg" />
      <div className="type" onClick={onTypeTextClick}>
        Type
      </div>
      <div className="sokoni-accommodation-child3" />
      <img className="icon-parkdown1" alt="" src="/iconparkdown.svg" />
      <b className="request" onClick={onRequestTextClick}>
        Request
      </b>
    </div>
  );
};

export default SokoniAccommodation;
