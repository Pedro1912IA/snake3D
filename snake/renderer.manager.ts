import {Vector2, WebGLRenderer } from "three"
import { SceneManager } from "./scene.manager"
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { GUIManager } from "./gui.manager"

export class RenderManager
{

    private static renderer : WebGLRenderer
    public static canvas : HTMLCanvasElement
    private static composer: EffectComposer


    private constructor()
    {
        GUIManager.createScore()
        SceneManager.init()
        RenderManager.init()
        window.addEventListener('resize', RenderManager.resize)
        RenderManager.renderLoop()     
    }

    private static init(): void
    {
        RenderManager.getCanvas()
        RenderManager.createRenderer()
        RenderManager.postProcessing()
    }

    private static renderLoop(): void
    {
        requestAnimationFrame(RenderManager.renderLoop)
        RenderManager.renderer.render(SceneManager.scene, SceneManager.camara)
        RenderManager.composer.render()
    }

    private static getCanvas(): void
    {
        RenderManager.canvas = document.getElementById('game') as HTMLCanvasElement
    }
    private static createRenderer(): void
    {
        RenderManager.renderer = new WebGLRenderer({ antialias: true, canvas: RenderManager.canvas})
        RenderManager.renderer.setPixelRatio(window.devicePixelRatio)
        RenderManager.renderer.setSize(window.innerWidth, window.innerHeight)
        RenderManager.renderer.toneMappingExposure = 2
    }

    private static postProcessing(): void
    {
        const width = window.innerWidth
        const height = window.innerHeight
        const renderScene = new RenderPass(SceneManager.scene,SceneManager.camara)
        const bloomPass = new UnrealBloomPass (new Vector2(width,height), 1.5, 0.4,0.85)
        bloomPass.threshold = 0
        bloomPass.strength= 1
        bloomPass.radius = 0
        bloomPass.renderToScreen = true
        RenderManager.composer = new EffectComposer(RenderManager.renderer)
        RenderManager.composer.setSize(width,height)
        RenderManager.composer.addPass(renderScene)
        RenderManager.composer.addPass(bloomPass)
        RenderManager.renderer.toneMappingExposure = Math.pow(0.9,4.0)




    }

    

    private static resize(): void
    {
        const width = window.innerWidth
        const height = window.innerHeight
        SceneManager.camara.aspect = width / height
        SceneManager.camara.updateProjectionMatrix()
        RenderManager.renderer.setSize(width,height)
        RenderManager.renderer.setPixelRatio(2)
    }

    public static startGame(): void
    {
        if(!RenderManager.renderer){
            new RenderManager()
        }
    }
}