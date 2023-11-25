import "../styles/globals.css";
import Navigation from "../components/navigation";
import SimpleBottomNavigation from "../components/layouts/bottom-nav-mobile";
import Footer from "../components/footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <SimpleBottomNavigation />
    </Provider>
  );
}
