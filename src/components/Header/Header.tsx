import {Link} from "react-router-dom";
import React from "react";
import style from './header.module.css'
const Header = () => {
    return (
        <header>
            <div className={style.header__items}>
                <Link className={style.headet_item} to={"/"}>Список профилей</Link>
                <Link className={style.headet_item} to={"/toAddNewProfile"}>Добавить новый профиль</Link>
            </div>
        </header>
    )
}
export default Header