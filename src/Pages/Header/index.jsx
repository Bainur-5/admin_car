import { NavLink } from 'react-router-dom'
import cls from './Header.module.scss'
const Header = () =>{
    return(
    <div className={cls.root}>
        
        <ul>
            <li><NavLink key='/' activeClassName={cls.active} exact to='/'>Авто</NavLink></li>
            <li><NavLink key='/Users' activeClassName={cls.active} exact to='/Users'>Пользователи</NavLink></li>
        </ul>

    </div>
    )
}
export default Header;