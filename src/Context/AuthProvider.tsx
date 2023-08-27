import {createContext, PropsWithChildren, useContext, useState} from "react";
import {useAppDispatch} from "../hooks/useTypedSelector";
import {ILogin, loginAsync} from "../store/features/loginSlice";
import axios from "axios";

interface AuthContextState {
    userLog: string | null,
    setUserLog: any,
    tokenFromAuth: boolean | null,
    setTokenFromAuth: any,
    loginHandle: any,
    logoutHandle: any
}

const AunthContextInititalState: AuthContextState = {
    userLog: "",
    setUserLog: () => { },
    tokenFromAuth: false,
    setTokenFromAuth: () => {},
    loginHandle: () => {},
    logoutHandle: () => {}
}
export const AuthContext = createContext<AuthContextState>(AunthContextInititalState);
export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [tokenFromAuth, setTokenFromAuth] = useState<boolean | null>(null);
    const [userLog, setUserLog] = useState<string | null>(null)
    const dispatch = useAppDispatch();

    const loginHandle =  (userParams: ILogin) => {
        try {
            const response = axios.post("https://localhost:7141/api/Login/login", userParams);
            response.then((res) =>{
                console.log("keeeeeeeeeeek")
                return res.data
            })
        }catch (e) {
            console.log("keeeeeeeeeeek22222222")
            console.log({e})
        }


    }

    const logoutHandle = () => {
       localStorage.removeItem("token");
       setUserLog(null);
       setTokenFromAuth(false);
    }

    const values : AuthContextState = {
        userLog,
        setUserLog,
        tokenFromAuth,
        setTokenFromAuth,
        loginHandle,
        logoutHandle,
    }


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}