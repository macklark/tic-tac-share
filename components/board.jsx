import { useState } from "react";
import FrontDrop from "./frontdrop";

import Toast from "./toast";

const tiles = [
    {id: 0, tileName: 'tile-0', value: null},
    {id: 1, tileName: 'tile-1', value: null},
    {id: 2, tileName: 'tile-2', value: null},
    {id: 3, tileName: 'tile-3', value: null},
    {id: 4, tileName: 'tile-4', value: null},
    {id: 5, tileName: 'tile-5', value: null},
    {id: 6, tileName: 'tile-6', value: null},
    {id: 7, tileName: 'tile-7', value: null},
    {id: 8, tileName: 'tile-8', value: null}
];

const winninScenarios = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let whoWon = null;
let isBoardFull = 0;

function checkWinningScenario(id, value) {
    winninScenarios.forEach(scenario => {
        const indexOfValue = scenario.indexOf(id);
        if (scenario.includes(id)) {
            scenario[indexOfValue] = value;
        }

        if (scenario.every((val) => val  === 'x')) {
            whoWon = 'X Wins !'
        } else if (scenario.every((val) => val  === 'o')) {
            whoWon = 'O Wins !'
        }
    });
};

export default function Board() {

    const [playerTurn, setPlayerTurn] = useState(true);

    const turnHandler = (id) => {
        setPlayerTurn(!playerTurn);
        tiles[id].value = playerTurn ? 'x' : 'o';

        checkWinningScenario(id, tiles[id].value);
        isBoardFull += 1;
    };

    const replayHandler = () => {
        window.location.reload(false);
    };

    return(
        <main className="flex flex-col justify-center items-center pt-20">
            <FrontDrop isOpen={whoWon} replayHandler={replayHandler} isBoardFull={isBoardFull}>
                {tiles.map((tile, index) => {
                    return(
                        <label key={index} htmlFor={tile.tileName} className="cursor-pointer relative">
                            <input type="radio" id={tile.tileName} className="appearance-none md:h-32 md:w-32 w-14 h-14 border-4 rounded-lg" onChange={() => turnHandler(tile.id)} />
                            {tile.value === 'x' ? 
                                <svg xmlns="http://www.w3.org/2000/svg" className={`absolute text-8xl md:h-32 md:w-32 w-14 h-14 top-0 opacity-0 check-${tile.id}`} width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"/></svg>
                            :   
                                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" className={`absolute text-8xl md:h-32 md:w-32 w-14 h-14 top-0 opacity-0 check-${tile.id}`} viewBox="0 0 448 512"><path fill="currentColor" d="M224 96a160 160 0 1 0 0 320a160 160 0 1 0 0-320zm224 160a224 224 0 1 1-448 0a224 224 0 1 1 448 0z"/></svg>
                            }
                        </label>
                    )
                })}
            </FrontDrop>
            <Toast msg={whoWon} />
        </main>
    )
};