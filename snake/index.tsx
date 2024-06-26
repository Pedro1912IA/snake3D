import { Component, ReactNode } from "react";
import { RenderManager } from "./renderer.manager";
import { Menu } from "./ui/menu";
import Panel from "./ui/panel";
import DefeatScreen from "./ui/defeat.screen";
import VictoryScreen from "./ui/victory.screen";

export default class SnakeComponent extends Component 
{

    public componentDidMount(): void 
    {
        RenderManager.startGame()
    }

    public render() : ReactNode
    {
        return(
            <div>
                
                <canvas id="game" className="fullscreen"/>
                <Panel/>
                <Menu/>
                <DefeatScreen/>
                <VictoryScreen/>
            </div>
        )
    }
}