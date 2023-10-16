import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SokoniAsk from "./pages/SokoniAsk";
import SokoniAccommodation from "./pages/SokoniAccommodation";
import TransactionHistoryBalance from "./pages/TransactionHistoryBalance";
import MyWalletSetBudget from "./pages/MyWalletSetBudget";
import HomePagetransactionHistory from "./pages/HomePagetransactionHistory";
import HomePagesokoni from "./pages/HomePagesokoni";
import SignIn from "./pages/SignIn";
import ServicesSokoni from "./pages/ServicesSokoni";
import ServicesLoadWallet from "./pages/ServicesLoadWallet";
import ServicesPayDetails from "./pages/ServicesPayDetails";
import MyBureau from "./pages/MyBureau";
import TransactionHistoryMySpendi from "./pages/TransactionHistoryMySpendi";
import SokoniTransport from "./pages/SokoniTransport";
import SokoniTravelPackage from "./pages/SokoniTravelPackage";
import MyWallet from "./pages/MyWallet";
import ServicesPay from "./pages/ServicesPay";
import MyBureauAvailableBalance from "./pages/MyBureauAvailableBalance";
import TransactionHistoryTrackMy from "./pages/TransactionHistoryTrackMy";
import SokoniRecommendedAreas from "./pages/SokoniRecommendedAreas";
import MyWalletAvailableBalance from "./pages/MyWalletAvailableBalance";
import SignUp from "./pages/SignUp";
import ExplorePage from "./pages/ExplorePage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sokoni-ask":
        title = "";
        metaDescription = "";
        break;
      case "/sokoni-accommodation":
        title = "";
        metaDescription = "";
        break;
      case "/transaction-history-balance":
        title = "";
        metaDescription = "";
        break;
      case "/my-wallet-set-budget":
        title = "";
        metaDescription = "";
        break;
      case "/home-pagetransaction-history":
        title = "";
        metaDescription = "";
        break;
      case "/home-pagesokoni":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/servicessokoni":
        title = "";
        metaDescription = "";
        break;
      case "/services-load-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/services-pay-details":
        title = "";
        metaDescription = "";
        break;
      case "/my-bureau":
        title = "";
        metaDescription = "";
        break;
      case "/transaction-history-my-spendings":
        title = "";
        metaDescription = "";
        break;
      case "/sokoni-transport":
        title = "";
        metaDescription = "";
        break;
      case "/sokoni-travel-package":
        title = "";
        metaDescription = "";
        break;
      case "/my-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/services-pay":
        title = "";
        metaDescription = "";
        break;
      case "/my-bureauavailable-balance":
        title = "";
        metaDescription = "";
        break;
      case "/transaction-history-track-my-bills":
        title = "";
        metaDescription = "";
        break;
      case "/sokoni-recommended-areas":
        title = "";
        metaDescription = "";
        break;
      case "/my-wallet-available-balance":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/explore-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sokoni-ask" element={<SokoniAsk />} />
      <Route path="/sokoni-accommodation" element={<SokoniAccommodation />} />
      <Route
        path="/transaction-history-balance"
        element={<TransactionHistoryBalance />}
      />
      <Route path="/my-wallet-set-budget" element={<MyWalletSetBudget />} />
      <Route
        path="/home-pagetransaction-history"
        element={<HomePagetransactionHistory />}
      />
      <Route path="/home-pagesokoni" element={<HomePagesokoni />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/servicessokoni" element={<ServicesSokoni />} />
      <Route path="/services-load-wallet" element={<ServicesLoadWallet />} />
      <Route path="/services-pay-details" element={<ServicesPayDetails />} />
      <Route path="/my-bureau" element={<MyBureau />} />
      <Route
        path="/transaction-history-my-spendings"
        element={<TransactionHistoryMySpendi />}
      />
      <Route path="/sokoni-transport" element={<SokoniTransport />} />
      <Route path="/sokoni-travel-package" element={<SokoniTravelPackage />} />
      <Route path="/my-wallet" element={<MyWallet />} />
      <Route path="/services-pay" element={<ServicesPay />} />
      <Route
        path="/my-bureauavailable-balance"
        element={<MyBureauAvailableBalance />}
      />
      <Route
        path="/transaction-history-track-my-bills"
        element={<TransactionHistoryTrackMy />}
      />
      <Route
        path="/sokoni-recommended-areas"
        element={<SokoniRecommendedAreas />}
      />
      <Route
        path="/my-wallet-available-balance"
        element={<MyWalletAvailableBalance />}
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/explore-page" element={<ExplorePage />} />
    </Routes>
  );
}
export default App;
