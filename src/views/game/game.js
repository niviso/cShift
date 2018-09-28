import {inject} from 'aurelia-framework';
import {GameState} from 'game-state';
import $ from "jquery";
@inject(GameState)
export class Game{
    constructor(gameState){
      this.gameState = gameState;
      this.blocks = 9; 
      this.timeOut = 3000;


      this.loop = null;
    }

    attached(){
      this.gameState.reset();

      this.gameState.wait = new Howl({
        src: ['resources/wait.wav'],
        loop: false
      });

      this.gameState.music = new Howl({
        src: ['resources/loop1.mp3'],
        loop: true
      });
      this.gameState.go = new Howl({
        src: ['resources/go.wav'],
        loop: false
      });

      this.loop = setInterval(x=>{
        this.timeOut = Math.floor(Math.random() * 5000) + 3000;
        let lastColor = this.gameState.activeColor;
        this.gameState.activeColor = this.gameState.getColor(this.gameState.activeColor);
        if(this.gameState.activeColor == "white"){
          this.gameState.wait.play();
        }
        if(lastColor == "white" && this.gameState.activeColor != "white"){
          this.gameState.go.play();
        }
      },this.timeOut);


      if(this.gameState.tutorial){
        $(this.tutorial).delay(1000).fadeOut(1000);
      }


      this.gameState.music.play();
    }

    detached(){
      clearInterval(this.loop);
    }

}
