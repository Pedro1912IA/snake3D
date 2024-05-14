import { State } from "./states/state"
import { States } from "./states/states"

export class GUIManager

{
    public static score: HTMLParagraphElement = document.createElement('p')

    public static createScore(): void
    {
        GUIManager.score.style.fontSize = '20px'
        GUIManager.score.style.color = 'white'
        GUIManager.score.style.position = 'fixed'
        GUIManager.score.style.top = '10px'
        GUIManager.score.style.right = '60px'
        GUIManager.score.style.zIndex = '10'
        GUIManager.score.id = 'score'
        document.body.appendChild(GUIManager.score)

    }

    public static menuButtons(): void
    {
        const menu = document.getElementById('menu')
        const credit = document.createElement('button')
        credit.className = 'button'
        credit.innerHTML = 'CREDITS'
        credit.onclick = () => State.setCurrent(States.credit)
        const game = document.createElement('button')
        game.className = 'button'
        game.innerHTML = 'PLAY'
        game.onclick = () => State.setCurrent(States.game)
        menu.appendChild(game)
        menu.appendChild(credit)
        
    }

    public static creditButtons(): void
    {
        const menu = document.getElementById('menu')
        const back = document.createElement('button')
        back.className = 'button'
        back.innerHTML = 'BACK'
        back.onclick = () => State.setCurrent(States.menu)
        menu.appendChild(back)
    }

    public static clearaButtons(): void
    {
        const menu = document.getElementById('menu')
        menu.textContent = ''
    }

    public static showHtml(id: string, style='block'): void
    {
        const element = document.getElementById(id)
        element.style.display = style
    }

    public static hideHtml(id: string): void
    {
        const element = document.getElementById(id)
        element.style.display = "none"
    }
}