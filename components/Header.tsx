import { FaHome, FaSearch, FaBell, FaMailBulk, FaRegBookmark, FaUserAlt, FaPlusSquare } from "react-icons/fa"
import Avatar from "./Avatar"
import style from "../styles/Header.module.css"
import NavItem from "./NavItem"

const user = {
    name: "John Doe",
    username: "johndoe",
    avatar: "/images/avatar.png"
}

const Header = () => {
    return (
        <header className={style.container}>
            <div>
                <nav className={style.nav}>
                    <NavItem Icon={FaHome} layer="Home" link="/home" />
                    <NavItem Icon={FaSearch} layer="Explore" link='/explore' />
                    <NavItem Icon={FaBell} layer="Notifications" link='/notifications' />
                    <NavItem Icon={FaMailBulk} layer="Messages" link='/messages' />
                    <NavItem Icon={FaRegBookmark} layer="Bookmarks" link='/saved' />
                    <NavItem Icon={FaUserAlt} layer="Profile" link='/profile' />
                    <NavItem Icon={FaPlusSquare} layer="More" link='/add' />
                </nav>
                <div className={style.avatarContainer}>
                    <div tabIndex={0}>
                        <Avatar src={user.avatar} alt={`${user.username} profile picture`} size={32} />
                        <div>
                            <p className={style.name}>{user.name}</p>
                            <p className={style.username}>@{user.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header