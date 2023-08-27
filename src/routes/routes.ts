import {ListProfile} from "../modules/ListProfile";
import {AddingNewProfile} from "../modules/AddingNewProfile";
import PersonalProfile from "../modules/PersonalProfile/PersonalProfile";
import Authorization from "../modules/Authorization/Authorization";
import Registration from "../modules/Registration/Registration";


export const MAIN_PAGE = '/';
export const ADDING_NEW_PROFILE_PAGE = '/addingnewprofile';
export const PERSONAL_PROFILE_PAGE = "/personalprofile/:id";
export const AUTH_PAGE = '/auth';
export const REGISTRATION_PAGE = '/registration';

export interface IRoute {
    path?: string,
    element: () => JSX.Element
}

export type RouteProps = IRoute[]

export const PrivateRoutes: RouteProps = [
    { path: MAIN_PAGE, element: ListProfile },
    { path: ADDING_NEW_PROFILE_PAGE, element: AddingNewProfile },
    { path: PERSONAL_PROFILE_PAGE, element: PersonalProfile }
]

export const PublicRoutes: RouteProps = [
    { path: AUTH_PAGE, element: Authorization },
    { path: REGISTRATION_PAGE, element: Registration },
]
