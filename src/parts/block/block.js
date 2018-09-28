import { inject, bindable } from 'aurelia-framework';

export class Block{
  @bindable gameState;

  constructor(){
    this.color = "white";
    this.loop = null;
    this.timeOut = Math.floor(Math.random() * 4000) + 2000;


  }

  attached(){
    this.color = this.gameState.getColor();

    this.loop = setInterval(x=>{
      this.getNewColor();
      this.timeOut = Math.floor(Math.random() * 4000) + 2000;
    },this.timeOut);
  }

  detached(){
    clearInterval(this.loop);

  }

  press(){
    this.gameState.click.play();
    if(this.gameState.activeColor == "white"){
      this.gameState.gameOver();
    }
    else if(this.color == this.gameState.activeColor){
      this.gameState.points++;
    } else {
      this.gameState.gameOver();
    }
     this.color = "white";
  }
  getNewColor(){
    let lastColor = this.color;
    this.color = this.gameState.getColor();
    if(lastColor == this.color){
      this.getNewColor();
    }
  }

}
