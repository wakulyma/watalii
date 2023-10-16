import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SokoniRecommendedAreas.css";

const SokoniRecommendedAreas: FunctionComponent = () => {
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

  const onAccommodationTextClick = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  const onAskTextClick = useCallback(() => {
    navigate("/sokoni-transport");
  }, [navigate]);

  return (
    <div className="sokoni-recommended-areas">
      <div className="sokoni-recommended-areas-child" />
      <div className="sokoni-recommended-areas-item" />
      <img className="watalii-2-icon9" alt="" src="/watalii-2@2x.png" />
      <div className="home22" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services27" onClick={onServicesTextClick}>
        Services
      </div>
      <img
        className="sneha-cecil-yucizaievj8-unspla-icon4"
        alt=""
        src="/snehacecilyucizaievj8unsplash-1@2x.png"
      />
      <div className="my-bureau24" onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className="contact-us19">Contact Us</div>
      <div className="sokoni26" onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className="my-wallet22" onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <div
        className="transaction-history18"
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <b className="sokoni27" onClick={onSokoniText1Click}>
        Sokoni
      </b>
      <div className="sokoni-recommended-areas-inner" />
      <div className="i-recommend">I recommend,</div>
      <div className="wasini-islands"> Wasini Islands</div>
      <b className="usd-20-kes">USD 20- Kes 3000</b>
      <img
        className="material-symbolsmore-up-icon5"
        alt=""
        src="/materialsymbolsmoreup.svg"
      />
      <img className="ku-1-icon1" alt="" src="/ku-11@2x.png" />
      <img className="o-1-icon1" alt="" src="/o-1@2x.png" />
      <img className="co-1-icon1" alt="" src="/co-11@2x.png" />
      <img
        className="icround-refresh-icon4"
        alt=""
        src="/icroundrefresh3.svg"
      />
      <img className="op-1-icon18" alt="" src="/op-1@2x.png" />
      <img
        className="sokoni-recommended-areas-child1"
        alt=""
        src="/line-21.svg"
      />
      <img className="watalii-3-icon10" alt="" src="/watalii-3@2x.png" />
      <div className="travel-packages4" onClick={onTravelPackagesTextClick}>
        Travel Packages
      </div>
      <b className="recommended-areas4" onClick={onRecommendedAreasTextClick}>
        Recommended Areas
      </b>
      <div className="transport7" onClick={onTransportTextClick}>
        Transport
      </div>
      <div className="accommodation4" onClick={onAccommodationTextClick}>
        Accommodation
      </div>
      <div className="ask4" onClick={onAskTextClick}>
        Ask
      </div>
    </div>
  );
};

export default SokoniRecommendedAreas;
