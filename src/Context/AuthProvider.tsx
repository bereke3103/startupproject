import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/useTypedSelector";
import {ILogin, loginAsync} from "../store/features/loginSlice";

interface IAuthContext {
    loginContext: string | null,
    setLoginContext: any,
    successContext: boolean | null,
    setSuccessContext: any,
    loginHandle: any,
    logoutHandle: any,
    tokenContext: string | null,
    setTokenContext: any
}

const AunthContextState: IAuthContext = {
    loginContext: "",
    setLoginContext: () => {
    },
    successContext: false,
    setSuccessContext: () => {
    },
    loginHandle: (userParams: any): any => {
    },
    logoutHandle: () => {
    },
    tokenContext: "",
    setTokenContext: () => {
    }
}
export const AuthContext = createContext<IAuthContext>(AunthContextState);
export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
    const {token, success, login} = useAppSelector(state => state.login);
    const [tokenContext, setTokenContext] = useState<string | null>(null)
    const [successContext, setSuccessContext] = useState<boolean | null>(null);
    const [loginContext, setLoginContext] = useState<string | null>(null)
    const dispatch = useAppDispatch();

    const loginHandle = (userParams: ILogin) => {
        dispatch(loginAsync(userParams)).unwrap().then((res) => {
            setTokenContext(res.data)
            if (token !== null && token !== undefined) {
                localStorage.setItem("token", token);
            }
            setSuccessContext(true)
            setLoginContext(userParams.login);

        }).catch((e) => {
            setSuccessContext(false)
            setTokenContext(null)
            setLoginContext(null);
        })
    }

    const logoutHandle = () => {
        localStorage.removeItem("token");
        setLoginContext(null);
        setSuccessContext(false);
    }

    const values: IAuthContext = {
        loginContext,
        setLoginContext,
        successContext,
        setSuccessContext,
        loginHandle,
        logoutHandle,
        tokenContext,
        setTokenContext,
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