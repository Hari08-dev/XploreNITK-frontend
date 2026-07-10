import { GoogleLogin } from "@react-oauth/google";
import {useAuth} from "../hooks/useAuth.js"

const GoogleBtn = () => {
    const {handleAuth} = useAuth();
    return(
        <GoogleLogin
            onSuccess={(res)=>{handleAuth(res)}}
            onError={console.log("something went wrong")}
            theme="filled_black"
            shape="pill"
            size="large"
            width="300"
            text="continue_with"
        />
    );
}

export default GoogleBtn;