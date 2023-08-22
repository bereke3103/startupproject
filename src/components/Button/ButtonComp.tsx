import {MouseEventHandler} from "react";
import style from "./button.module.css"
import {Button} from "antd";
type ButtonProps = {
    label: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

const ButtonComp = ({label, onClick}: ButtonProps) => {
    return (
        <Button type="primary" className={style.button} onClick={onClick}>{label}</Button>
    )
}

export default ButtonComp;