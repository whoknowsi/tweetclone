import Tweets from './Tweets'
import style from '../styles/InfinityScroll.module.css'
import TweetsHeader from './TweetsHeader'

const InfinityScroll = () => {
    return (
        <div className={style.container}>
            <TweetsHeader />
            <Tweets />
        </div>
    )
}

export default InfinityScroll