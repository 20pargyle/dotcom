import { Client } from 'boardgame.io/react';
import { dotcom } from './Game';

const App = Client({ game: dotcom });

export default App;