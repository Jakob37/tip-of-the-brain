import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

// Use this as a starting point:
// https://www.freecodecamp.org/news/ultimate-guide-to-aws-amplify-and-reacxt/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>Tip of the Brain!</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
