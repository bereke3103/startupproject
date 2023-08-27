import {useAuth} from "../Context/AuthProvider";
import {Navigate, Outlet} from "react-router";
import {AUTH_PAGE} from "./routes";

const PrivateRoute = () => {
    const {userLog} = useAuth();
    return !userLog ? <Navigate to={AUTH_PAGE}/> : <Outlet/>
}

export default  PrivateRoute;