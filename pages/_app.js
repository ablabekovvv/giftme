import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import {useEffect, useState} from "react";
import Header from "../components/Header";


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
      <body className="font-monsterrat">
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Component {...pageProps } isAuth={isAuth} setIsAuth={setIsAuth} />
        </body>
  )
}

export default MyApp;
