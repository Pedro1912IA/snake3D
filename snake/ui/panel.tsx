import { Component, ReactNode } from "react";

export default class Panel extends Component
{
    public render(): ReactNode
    {
        return(
            <div id="panel">
                <h3 className="title">Credits</h3>
                <div className="text">
                    <p>Project made by Pedro Araoz</p><br />
                    <p>Based on https://github.com//BabylonJs/SpacePirates</p><br />
                    <p>created with React JS, TypeScript y Three JS</p>

                </div>
                <img src="/ui/textpanel.png" alt="Panel azul" />
            </div>
        )
    }
}