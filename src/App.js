import { Client } from 'boardgame.io/react';
import { dotcom } from './Game';
import { SocketIO } from 'boardgame.io/multiplayer';

const App = Client({ 
    game: dotcom,
    multiplayer: SocketIO({ server: 'localhost:8000' })
});

export default App;