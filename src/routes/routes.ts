
import Registration from "../modules/Registration/Registration";
import OtherCardsResumeList from "../modules/CardsResume/OtherCardsResumeList/OtherCardsResumeList";
import MyCardsResumeList from "../modules/CardsResume/MyCardsResumeList/MyCardsResumeList";
import CreatingResume from "../modules/CreatingResume/CreatingResume";
import PersonCard from "../modules/CardsResume/PersonCard/PersonCard";
import Authorization from "../modules/Authorization/Authorization";
import Slider from "../modules/Slider/Slider";


export const MAIN_PAGE = '/';
export const MY_LIST_RESUMES = '/mylistresumes';
export const ADDING_NEW_PROFILE_PAGE = '/addingnewprofile';
export const PERSONAL_PROFILE_PAGE = "/personalprofile/:id";
export const AUTH_PAGE = '/auth';
export const REGISTRATION_PAGE = '/registration';
export const NEWS_PAGE = '/news';

export interface IRoute {
    path?: string,
    element: () => JSX.Element
}

export type RouteProps = IRoute[]

export const PrivateRoutes: RouteProps = [
    { path: MAIN_PAGE, element: OtherCardsResumeList },
    { path: MY_LIST_RESUMES, element: MyCardsResumeList },
    { path: ADDING_NEW_PROFILE_PAGE, element: CreatingResume },
    { path: PERSONAL_PROFILE_PAGE, element: PersonCard },
    { path: NEWS_PAGE, element: Slider }
]

export const PublicRoutes: RouteProps = [
    { path: AUTH_PAGE, element: Authorization },
    { path: REGISTRATION_PAGE, element: Registration },
]
