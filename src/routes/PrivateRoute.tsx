import {useAuth} from "../Context/AuthProvider";
import {Navigate, Outlet} from "react-router";
import {AUTH_PAGE} from "./routes";

const PrivateRoute = () => {
    const {successContext} = useAuth();
    console.log({successContext})
    return !successContext ? <Navigate to={AUTH_PAGE}/> : <Outlet/>
}

export default  PrivateRoute;