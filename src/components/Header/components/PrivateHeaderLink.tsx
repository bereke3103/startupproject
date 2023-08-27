import {ADDING_NEW_PROFILE_PAGE, MAIN_PAGE} from "../../../routes/routes";
import HeaderLink from "./HeaderLink/HeaderLink";
import React from "react";

const PrivateHeaderLink = () => {
    return (
        <HeaderLink links={[
            {
                className: "link",
                to: ADDING_NEW_PROFILE_PAGE,
                linkName: "Добавление нового профиля"
            },
            {
                className: "link",
                to: MAIN_PAGE,
                linkName: "Список профилей"
            }
        ]}/>
    )
}

export default PrivateHeaderLink;