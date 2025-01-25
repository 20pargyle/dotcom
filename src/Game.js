import { TurnOrder } from 'boardgame.io/core'

export const dotcom = {
    setup: () => ({}),

    ctx: {
        
    },

    turn: {
        order: TurnOrder.ONCE,
        stages: {
            roll: {
                moves: { Roll }
            },
            move: {
                moves: {
                    Move, 
                    Buy, 
                    Sell
                }
            },
            trade: {
                moves: {
                    Trade
                }
            }
        }
    },

    phases: {
        setup: { Setup },
        play: {
            moves: {
                Roll, Move, Buy, Sell, Trade
            }
        }
    },

};