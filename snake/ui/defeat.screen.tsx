import { Component, ReactNode } from "react";
import { State } from "../states/state";
import { States } from "../states/states";

export default class DefeatScreen extends Component
{
    public render(): ReactNode
    {
        return(
            <div id="defeat">
                <img src="/ui/game_over.png" alt="cartel de fin de juego" />
                <button onClick={() => State.setCurrent(States.menu)} className="button">MENU</button>
            </div>
        )
    }
}