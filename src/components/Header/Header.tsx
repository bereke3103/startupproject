import {Link} from "react-router-dom";
import React from "react";
import style from './header.module.css'
import {ADDING_NEW_PROFILE_PAGE, AUTH_PAGE, MAIN_PAGE} from "../../routes/routes";
const Header = () => {
    return (
        <header>
            <div className={style.header__items}>
                <Link className={style.headet_item} to={MAIN_PAGE}>Список профилей</Link>
                <Link className={style.headet_item} to={ADDING_NEW_PROFILE_PAGE}>Добавить новый профиль</Link>
            </div>
        </header>
    )
}
export default Header