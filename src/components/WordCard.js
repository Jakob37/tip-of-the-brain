import './WordCard.css'

function WordCard() {

    const chinese = '苹果';
    const english = 'Apple';
    const difficulty = 3;

    return <div className="word-card">
        <div>{chinese}</div>
        <div>{english}</div>
        <div>{new Array(difficulty).fill('X')}</div>
    </div>
}

export default WordCard
