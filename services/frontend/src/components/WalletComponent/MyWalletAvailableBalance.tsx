import { FunctionComponent, useCallback } from "react";
import styles from "./MyWalletAvailableBalance.module.css";
import { useNavigate } from "react-router-dom";

const MyWalletAvailableBalance: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoadWalletTextClick = () => navigate("/wallet");
  const onAvailableBalanceTextClick = () => navigate("/balance");
  const onSetBudgetTextClick = () => navigate("/budget");

  const onMyWalletTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onMyWalletText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onTransactionHistoryTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onSokoniTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onServicesTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onMyBureauTextClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.myWalletAvailableBalance1}>
      <div className={styles.myWalletAvailableBalanceChild} />
      <div className={styles.myWalletAvailableBalanceItem} />
      <div className={styles.watalii11} />
      <div className={styles.myWallet} onClick={onMyWalletTextClick}>
        My Wallet
      </div>
      <b className={styles.myWallet1} onClick={onMyWalletText1Click}>
        My Wallet
      </b>
      <div className={styles.loadWallet} onClick={onLoadWalletTextClick}>
        Load Wallet
      </div>
      <div className={styles.availableBalance}>Available Balance</div>
      <div className={styles.setBudget} onClick={onSetBudgetTextClick}>
        Set Budget
      </div>
      <div
        className={styles.transactionHistory}
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className={styles.sokoni} onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className={styles.myWalletAvailableBalanceInner} />
      <div className={styles.creditBalance}>Credit Balance</div>
      <div className={styles.usd4300}>USD 4300</div>
      <b className={styles.kes640270}>{`Kes 640270 `}</b>
      <img className={styles.op1Icon} alt="" src="OP 1.png" />
      <img className={styles.mdilocationIcon1} alt="" src="mdi:location.svg" />
      <div className={styles.home}>Home</div>
      <div className={styles.services} onClick={onServicesTextClick}>
        Services
      </div>
      <div className={styles.myBureau} onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className={styles.contactUs}>Contact Us</div>
      <img className={styles.watalii3Icon} alt="" src="watalii 3.png" />
      <img className={styles.watalii4Icon} alt="" src="watalii 4.png" />
    </div>
  );
};

export default MyWalletAvailableBalance;
