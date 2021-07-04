import './WordCard.css'
import WordDate from './WordDate'

function WordCard(props) {


    return <div className="word-card">
        <WordDate date={props.date} />
        <div>{props.chinese}</div>
        <div>{props.english}</div>
        <div>{new Array(props.difficulty).fill('X')}</div>
    </div>
}

export default WordCard
