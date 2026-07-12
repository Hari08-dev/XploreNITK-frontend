import { GoogleLogin } from "@react-oauth/google";
import {useAuth} from "../hooks/useAuth.js"


const GoogleBtn = () => {
    const { handleAuth } = useAuth();

    return (
        <div className="flex justify-center w-full">
            <GoogleLogin
                onSuccess={(res) => handleAuth(res)}
                onError={() => console.log("Something went wrong")}
                theme="filled_black"
                shape="pill"
                size="large"
                width="300"
                text="continue_with"
            />
        </div>
    );
};

export default GoogleBtn;