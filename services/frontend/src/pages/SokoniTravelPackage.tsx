import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SokoniTravelPackage.css";

const SokoniTravelPackage: FunctionComponent = () => {
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

  const onMyWalletTextClick = useCallback(() => {
    navigate("/my-wallet");
  }, [navigate]);

  const onRecommendedAreasTextClick = useCallback(() => {
    navigate("/sokoni-recommended-areas");
  }, [navigate]);

  const onTransportTextClick = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  const onAccommodationTextClick = useCallback(() => {
    navigate("/sokoni-accommodation");
  }, [navigate]);

  const onAskTextClick = useCallback(() => {
    navigate("/sokoni-ask");
  }, [navigate]);

  const onTransactionHistoryTextClick = useCallback(() => {
    navigate("/transaction-history-my-spendings");
  }, [navigate]);

  const onTransportText1Click = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  return (
    <div className="sokoni-travel-package">
      <div className="sokoni-travel-package-child" />
      <img
        className="annie-spratt-uk3t05ndsng-unspl-icon"
        alt=""
        src="/anniesprattuk3t05ndsngunsplash-1@2x.png"
      />
      <div className="sokoni-travel-package-item" />
      <div className="watalii-114" />
      <div className="home17" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services20" onClick={onServicesTextClick}>
        Services
      </div>
      <img
        className="sneha-cecil-yucizaievj8-unspla-icon3"
        alt=""
        src="/snehacecilyucizaievj8unsplash-1@2x.png"
      />
      <div className="my-bureau17" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us14">Contact Us</div>
      <div className="sokoni19">Sokoni</div>
      <div className="my-wallet15" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <b className="travel-packages3">Travel Packages</b>
      <div className="recommended-areas3" onClick={onRecommendedAreasTextClick}>
        Recommended Areas
      </div>
      <div className="transport5" onClick={onTransportTextClick}>
        Transport
      </div>
      <div className="accommodation3" onClick={onAccommodationTextClick}>
        Accommodation
      </div>
      <div className="ask3" onClick={onAskTextClick}>
        Ask
      </div>
      <div
        className="transaction-history13"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <b className="sokoni20">Sokoni</b>
      <div className="sokoni-travel-package-inner" />
      <img
        className="material-symbolsmore-up-icon4"
        alt=""
        src="/materialsymbolsmoreup.svg"
      />
      <img className="ku-1-icon" alt="" src="/ku-1@2x.png" />
      <img className="o-1-icon" alt="" src="/o-1@2x.png" />
      <img className="co-1-icon" alt="" src="/co-1@2x.png" />
      <img
        className="icround-refresh-icon3"
        alt=""
        src="/icroundrefresh2.svg"
      />
      <img className="op-1-icon13" alt="" src="/op-1@2x.png" />
      <img className="mdilocation-icon4" alt="" src="/mdilocation1.svg" />
      <div className="my-location">My Location</div>
      <img className="sokoni-travel-package-child1" alt="" src="/line-21.svg" />
      <img className="watalii-3-icon7" alt="" src="/watalii-3@2x.png" />
      <div className="transport6" onClick={onTransportText1Click}>
        Transport
      </div>
    </div>
  );
};

export default SokoniTravelPackage;
