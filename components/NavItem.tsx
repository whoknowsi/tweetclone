import { IconType } from "react-icons"
import style from "../styles/NavItem.module.css"

interface props {
    Icon: IconType,
    layer: string,
    link: string,
}


const NavItem = ({Icon, layer, link}: props) => {
    return (
        
        <div className={style.container}>
            <a href={link}>
                <Icon />
                <span>{layer}</span>
            </a>
        </div>
    )
}

export default NavItem