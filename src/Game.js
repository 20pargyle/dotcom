import { TurnOrder } from 'boardgame.io/core'
import { Player } from './Player'

export const dotcom = {
    setup: () => ({ 
        players: initPlayers(),
    }),

    G: {
        
    },

    moves: {
        roll: ({ G, ctx, random }) => {
            const die = random.Die(6);
        },
    },

    turn: {
        order: TurnOrder.ONCE,
        stages: {
            roll: {
                moves: { roll }
            },
            move: {
                moves: {
                    move,
                    buy, 
                    sell
                }
            },
            trade: {
                moves: {
                    trade
                }
            }
        }
    },

    phases: {
        setup: { setup },
        play: {
            moves: {
                roll, move, buy, sell, trade
            }
        }
    },

};

function initPlayers(playerCount){
    let players = [];
    for (let i = 0; i < playerCount; i++) {
        players[i] = new Player(i);
    }
    return players;
}

function timestep(playerList){
    playerList.forEach(player => {
        true;
    });
}