import {Howl, Howler} from 'howler';
import {inject} from 'aurelia-framework';
import {GameState} from 'game-state';
@inject(GameState)
export class Gameover{
    constructor(gameState){
      this.gameState = gameState;
      this.sound = null;
    }

    attached(){
      this.sound = new Howl({
        src: ['resources/gameover.wav'],
        loop: false
      });

      this.sound.play();

    }

    start(){
      this.sound.stop();
      window.location = "#/game"
    }



}
