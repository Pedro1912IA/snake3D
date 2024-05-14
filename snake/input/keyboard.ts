import { Snake } from "../shared/snake"
import { Directions } from "../types/helpers"


export class InputManager
{
    public input: Directions = Directions.right 

    constructor()
    {
        this.handlekey = this.handlekey.bind(this)
        document.addEventListener('keydown', this.handlekey)
    }

    private handlekey(e): void
    {
        console.log(e.key)
        switch (e.key) {
                case 'ArrowUp':
                    if(Snake.direction !== Directions.down) this.input = Directions.up
                break;
                case 'ArrowDown':
                    if(Snake.direction !== Directions.up) this.input = Directions.down
                break;
                case 'ArrowLeft':
                    if(Snake.direction !== Directions.right) this.input = Directions.left
                break;
                case 'ArrowRight':
                    if(Snake.direction !== Directions.left) this.input = Directions.right
                break;
        
            
        }
    }

    public dispose(): void
    {
        document.removeEventListener('keydown', this.handlekey)
    }
}