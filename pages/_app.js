import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import {useEffect, useState} from "react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../store/rootReducer";
import {Footer} from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"))
    setIsAuth(data);
  }, [])
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(isAuth))
  }, [isAuth])

  return(
      <Provider store={store}>
      <body className="font-monsterrat">
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Component {...pageProps } isAuth={isAuth} setIsAuth={setIsAuth} />
        </body>
          <Footer />
      </Provider>
  )
}

export default MyApp;
