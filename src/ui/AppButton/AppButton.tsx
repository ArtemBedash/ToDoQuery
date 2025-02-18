import React from "react"
import { AppButtonProps } from "~/types/interface.ts"
import styles from "./AppButton.module.css"



const AppButton: React.FC<AppButtonProps> = ({ children, icon, onClick, className = "", ...props }) => {
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

export default AppButton
