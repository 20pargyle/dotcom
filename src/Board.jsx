import { Sidebar } from './Sidebar';

export function Board() {



    return (
        <div> 
            <Sidebar phase={phase} />
            <div id="graph"></div>
        </div>

    )
}