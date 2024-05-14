import { Component, ReactNode } from "react";
import { State } from "../states/state";
import { States } from "../states/states";

export default class VictoryScreen extends Component
{
    public render(): ReactNode
    {
        return(
            <div id="victory">
                <img src="/ui/you_win.png" alt="cartel de victoria" />
                <button onClick={() => State.setCurrent(States.menu)} className="button">MENU</button>
            </div>
        )
    }
}