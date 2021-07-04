import './App.css'
import WordCard from './components/Words/WordCard'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
// import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig)

// Use this as a starting point:
// https://www.freecodecamp.org/news/ultimate-guide-to-aws-amplify-and-reacxt/

function App() {

  const characters = [
    { chinese: '苹果', english: 'Apple', difficulty: 3, date: new Date(2020, 7, 14) },
    { chinese: '莉', english: 'Pear', difficulty: 2, date: new Date(2021, 2, 28) },
    { chinese: '橙子', english: 'Orange', difficulty: 4, date: new Date(2021, 5, 12) },
  ];

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <AmplifySignOut /> */}
      <h2>Tip of the Brain!</h2>
      <p>Which words are next to master?</p>
      <WordCard 
        chinese={characters[0].chinese}
        english={characters[0].english}
        difficulty={characters[0].difficulty}
        date={characters[0].date}
      ></WordCard>
      <WordCard 
        chinese={characters[1].chinese}
        english={characters[1].english}
        difficulty={characters[1].difficulty}
        date={characters[1].date}
      ></WordCard>
      <WordCard 
        chinese={characters[2].chinese}
        english={characters[2].english}
        difficulty={characters[2].difficulty}
        date={characters[2].date}
      ></WordCard>
      {/* </header> */}
    </div>
  );
}

export default App
