import { Component, ReactNode } from "react";

export default class Panel extends Component
{
    public render(): ReactNode
    {
        return(
            <div id="panel">
                <h3 className="title">Creditos</h3>
                <div className="text">
                    <p>Proyecto creado por Pedro Araoz</p><br />
                    <p>Basado en https://github.com//BabylonJs/SpacePirates</p><br />
                    <p>Realizado con React JS, TypeScript y Three JS</p>

                </div>
                <img src="/ui/textpanel.png" alt="Panel azul" />
            </div>
        )
    }
}