import { FunctionComponent, useCallback } from "react";
import styles from "./SetBudget.module.css";
import { useNavigate } from "react-router-dom";

const SetBudget: FunctionComponent = () => {
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

  const onHomeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onServicesTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onMyBureauTextClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.budget}>
      <div className={styles.setBudgetChild} />
      <div className={styles.setBudgetItem} />
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
      <div
        className={styles.availableBalance}
        onClick={onAvailableBalanceTextClick}
      >
        Available Balance
      </div>
      <b className={styles.setBudget}>Set Budget</b>
      <div
        className={styles.transactionHistory}
        onClick={onTransactionHistoryTextClick}
      >
        Transaction History
      </div>
      <div className={styles.sokoni} onClick={onSokoniTextClick}>
        Sokoni
      </div>
      <div className={styles.setBudgetInner} />
      <div className={styles.usd2300}>USD 2300</div>
      <b className={styles.kes342470}>
        <p className={styles.kes3424701}>Kes 342470</p>
      </b>
      <img className={styles.op1Icon} alt="" src="./assets/OP 1.png" />
      <img
        className={styles.mdilocationIcon1}
        alt=""
        src="./assets/mdi:location.svg"
      />
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.services} onClick={onServicesTextClick}>
        Services
      </div>
      <div className={styles.myBureau} onClick={onMyBureauTextClick}>
        My Bureau
      </div>
      <div className={styles.contactUs}>Contact Us</div>
      <img
        className={styles.watalii3Icon}
        alt="Watalii Icon"
        src="./assets/watalii.png"
      />
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
      </div>
      <b className={styles.setBudget1}>Set Budget</b>
      <img className={styles.watalii4Icon} alt="" src="./assets/watalii.png" />
    </div>
  );
};

export default SetBudget;
