import { NavLink } from 'react-router-dom'

import css from "./Navigation.module.css"
import { clsx } from 'clsx'
export default function Navigation() {
  const makeLink=({ isActive })=>{return clsx(css.link,isActive && css.isActive)}
    return (
        <nav className={css.list}>
        <NavLink to="/" className={makeLink}>Home </NavLink>
        <NavLink to="/movies"className={makeLink}>Movies</NavLink>
      </nav>
    )
}