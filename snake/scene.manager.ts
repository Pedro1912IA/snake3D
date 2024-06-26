import { State } from "./states/state";
import { States } from "./states/states";
import { Color, HemisphereLight, PerspectiveCamera, Scene } from "three";
import { Diorama } from "./shared/diorama";
import { MenuState } from "./states/menu.state";
import { GameState } from "./states/game.state";
import { Game } from "./shared/game";

export class SceneManager
{
    public static scene: Scene
    public static camara: PerspectiveCamera

    public static init() : void
    {
        SceneManager.createScene()
        SceneManager.createCamara()
        SceneManager.createLights()
        SceneManager.onReady()


        
    }

    private static createScene() : void
    {
        SceneManager.scene = new Scene()
        SceneManager.scene.background = new Color(0x000000)
    }

    private static createCamara() : void
    {
        SceneManager.camara = new PerspectiveCamera(35, window.innerWidth / window.innerHeight,1,100)
        SceneManager.camara.position.set(10,5,10)
        SceneManager.camara.lookAt(0,0,0)
        SceneManager.scene.add(SceneManager.camara)
    }

    private static createLights() : void
    {
        const light = new HemisphereLight(0xFFFFFF, 0.2)
        light.position.set(100,100,100)
        SceneManager.scene.add(light)
    }

    private static onReady(): void
    {
        MenuState.diorama = new Diorama()
        GameState.game = new Game()
        State.setCurrent(States.menu)
        MenuState.diorama.start()
    }
}