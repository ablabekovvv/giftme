import { useRouter } from "next/router";
import React from "react";
const withAuth = (WrappedComponent) => {
    return (props) => {
        if (typeof window !== "undefined") {
            const Router = useRouter();
            const [accessToken,setAccessToken] = React.useState(() => JSON.parse(localStorage.getItem("user")) ||null )
            // const [sign, setSign] = React.useState(() => JSON.parse(localStorage.getItem("user")) ||null )
            if (!accessToken) {
                Router.replace("/");
                return null;
            }
            return <WrappedComponent {...props} />;
        }
        return null;
    };
};

export default withAuth;