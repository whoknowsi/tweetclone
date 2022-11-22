import Avatar from "./Avatar"
import style from "../styles/Tweets.module.css"
import Image from "next/image"

const tweets = [
    {
        id: 1,
        content: 'And lead us not into temptation …',
        createdAt: '4h',
        name: 'Elon Musk',
        username: 'elonmusk',
        image: '/images/elonimg.jpg',
        url: '/images/elon.jpg',
    }, {
        id: 2,
        content: 'Our love will never die',
        createdAt: '5h',
        name: 'Elon Musk',
        username: 'elonmusk',
        image: '/images/elonimg2.jpg',
        url: '/images/elon.jpg',
    },
    {
        id: 3,
        content: 'Our love will never die',
        createdAt: '5h',
        name: 'Elon Musk',
        username: 'elonmusk',
        image: '/images/elonimg2.jpg',
        url: '/images/elon.jpg',
    },
    {
        id: 4,
        content: 'Our love will never die',
        createdAt: '5h',
        name: 'Elon Musk',
        username: 'elonmusk',
        image: '/images/elonimg2.jpg',
        url: '/images/elon.jpg',
    },
    {
        id: 5,
        content: 'Our love will never die',
        createdAt: '5h',
        name: 'Elon Musk',
        username: 'elonmusk',
        image: '/images/elonimg2.jpg',
        url: '/images/elon.jpg',
    },
    {
        id: 6,
        content: 'Our love will never die',
        createdAt: '5h',
        name: 'Elon Musk',
        username: 'elonmusk',
        image: '/images/elonimg2.jpg',
        url: '/images/elon.jpg',
    },
    {
        id: 7,
        content: 'Our love will never die',
        createdAt: '5h',
        name: 'Elon Musk',
        username: 'elonmusk',
        image: '/images/elonimg2.jpg',
        url: '/images/elon.jpg',
    },
    {
        id: 8,
        content: 'Our love will never die',
        createdAt: '5h',
        name: 'Elon Musk',
        username: 'elonmusk',
        image: '/images/elonimg2.jpg',
        url: '/images/elon.jpg',
    }
]

interface tweet {
    id: number,
    content: string,
    createdAt: string,
    name: string,
    username: string,
    image: string,
    url: string,
}

interface props {
    name: string,
    username: string,
    content: string,
    url: string,
    image: string,
    createdAt: string,
    id: number,
}

const Tweet = ({ name, username, url, image, createdAt, id, content }: props) => {
    return (
        <article className={style.container}>
            <div>
                <Avatar src={url} size={48} alt={`${username} profile picture`}/>
            </div>
            <div className={style.tweetContainer}>
                <div className={style.header}>
                    <a href={`/${username}`} className={style.name}>
                        <span>
                            {name}
                        </span>
                    </a>
                    <a href={`/${username}`} className={style.username} tabIndex={-1}>
                        <span>
                            @{username}
                        </span>
                    </a>
                    <div className={style.point}>
                        <span>·</span>
                    </div>
                    <a href={`/${username}/tweet/${id}`} >
                        <time dateTime={createdAt} className={style.dateTime}>
                            <span>{createdAt}</span>
                        </time>
                    </a>
                </div>
                <div className={style.content}>
                    <div>
                        <span>{content}</span>
                    </div>
                    <div className={style.mediaContainer}>
                        <Image src={image} alt={name} width={600} height={600}/>
                    </div>
                </div>
            </div>
        </article>
    )
}

const Tweets = () => {
    return (
        <div className={style.tweetsContainer}>
            {tweets.map(tweet => <Tweet key={tweet.id} name={tweet.name} username={tweet.username} url={tweet.url} image={tweet.image} createdAt={tweet.createdAt} id={tweet.id} content={tweet.content}/>)}
        </div>
    )
}

export default Tweets