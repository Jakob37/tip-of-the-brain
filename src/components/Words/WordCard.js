import './WordCard.css'
import WordDate from './WordDate'
import Card from '../UI/Card'

function WordCard(props) {


    return <div className="word-card">
        <WordDate date={props.date} />
        <div className="field">{props.chinese}</div>
        <div className="field">{props.english}</div>
        <div className="field">{new Array(props.difficulty).fill('X')}</div>
    </div>
}

export default WordCard
