import Image from "next/image"
import style from "../styles/Avatar.module.css"

interface props {
    src: string,
    alt: string,
    size: number,
}

const Avatar = ({src, alt, size}: props) => {
    return (
        <Image className={style.avatar} src={src} width={size} height={size} alt={alt} />
    )
}

export default Avatar