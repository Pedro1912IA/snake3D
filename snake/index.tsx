import { Component, ReactNode } from "react";
import { RenderManager } from "./renderer.manager";

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
            </div>
        )
    }
}