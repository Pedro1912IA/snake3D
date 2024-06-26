import { Diorama } from "../shared/diorama";
import { Game } from "../shared/game";
import { GUIManager } from "../gui.manager";
import { MenuState } from "./menu.state";
import { State } from "./state";

export class GameState extends State
{

    public static game: Game

    public enter(): void 
    {
        MenuState.diorama.dispose()
        GameState.game.start()
    }

    public exit(): void 
    {
        
    }

}