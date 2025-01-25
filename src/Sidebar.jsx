export function Sidebar() {

    return (
        <div className="sidebar">
            <div className="player">Player {"Steve"}'s turn</div>
            
            {/* if stage == roll */}
            <button>Roll</button>

            {/* if stage == move */}
            <button>Move</button>
            <button>Buy</button>
            <button>Sell</button>

            {/* if stage == trade */}
            <button></button>


            <button>End Turn</button>
        </div>
    )
}