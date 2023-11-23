import { AUTH_PAGE, REGISTRATION_PAGE } from "../../../routes/routes";
import HeaderLink from "./HeaderLink/HeaderLink";
import React from "react";

const PublicHeaderLink = () => {
  return (
    <HeaderLink
      links={[
        {
          className: "link",
          to: AUTH_PAGE,
          linkName: "Авторизация",
        },
        {
          className: "link",
          to: REGISTRATION_PAGE,
          linkName: "Регистрация",
        },
      ]}
    />
  );
};
export default PublicHeaderLink;
