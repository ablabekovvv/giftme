import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import API from "../api/index"

function User() {
    const router = useRouter()
    const {user} = router.query
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => {
        API.getUser(user)
            .finally(() => setIsPending(false))
            .then((res) => {
                setData(res.data)
            })
    }, [])
    if(isPending) return  <h1>...Loading</h1>
    return (
        <div>
            <h2>Email: {data?.email}</h2>
            <h2>Wishes: {data?.wishes.length}</h2>
        </div>
    );
}

export default User;