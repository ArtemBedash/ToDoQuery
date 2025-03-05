import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css";
import React from "react";

interface INavigationProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {
    variant?: "header" | "footer";
}

const links = [

    {
        to: "/todomy",
        name: "Todo",
    },
    {
        to: "/todomyquery",
        name: "TodoQuery"
    },
    {
        to: "/form",
        name: "MUI-Formik"
    },
];

export const Navbar: React.FC<INavigationProps> = () => {
    return (
        <nav className={style.nav}>
            {links.map((item) => (
                <NavLink to={item.to} key={item.name}>
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
};
