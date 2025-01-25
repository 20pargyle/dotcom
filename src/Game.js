import { TurnOrder } from 'boardgame.io/core'

export const dotcom = {
    setup: () => ({}),

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