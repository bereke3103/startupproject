import { ChangeEventHandler } from "react";
import style from "./input.module.css";
import { Input } from "antd";
type InputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
};

const InputComp = ({ onChange, label }: InputProps) => {
  return (
    <div className={style.input__item}>
      <div className="input__text">{label}</div>
      <Input onChange={onChange} type="text" />
    </div>
  );
};

export default InputComp;
