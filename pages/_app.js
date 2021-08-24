import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import {useEffect, useState} from "react";


function MyApp({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"))
    setIsAuth(data);
  }, [])
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(isAuth))
  }, [isAuth])
  return(
      <Component {...pageProps } setIsAuth={setIsAuth} />
  )
}

export default MyApp;
