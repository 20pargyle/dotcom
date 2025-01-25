export const dotcom = {
    setup: () => ({}),

    phases: {
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

};