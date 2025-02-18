import { Navbar } from '../Navbar/Navbar'

import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <Navbar />
    </header>
  )
}
