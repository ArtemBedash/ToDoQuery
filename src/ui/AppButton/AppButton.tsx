import React from "react"
import { AppBottonProps } from "../../types/interface"
import styles from "./AppBotton.module.css"



const AppBotton: React.FC<AppBottonProps> = ({ children, icon, onClick, className = "", ...props }) => {
  return (
    <button
      className={`${icon ? styles.icon : styles.button} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon ? icon : children}
    </button>
  )
}

export default AppBotton
