import Head from 'next/head'
import Header from "../components/Header";
import {useEffect, useState} from "react";

export default function Home() {
    const [message, setMessage] = useState("");
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://giftme.site/auth/jwt/create/', {
                        credentials: 'include',
                    });

                    const content = await response.json();

                    setMessage('hi')
                    setAuth(true)
                } catch (err) {
                    setMessage("youre not logged in")
                    setAuth(false)
                }
            }
        )();
    })
  return (
    <div>
      <Head>
        <title>Gift me</title>
      </Head>

        <Header auth={auth} />
    </div>
  )
}
