export class GameState{
  constructor(){

    this.colors = ["blue","green","red","white"];

    this.activeColor = "red";
    this.tutorial = false;
    this.points = 0;
    this.music = null;
    this.sound = null;

    this.click = new Howl({
      src: ['resources/click.wav'],
      loop: false
    });

    this.fart = new Howl({
      src: ['resources/fart.wav'],
      loop: false
    });

  }

  getColor(color,ignoreWhite){
    let index = Math.floor(Math.random() * this.colors.length);
    let outColor = this.colors[index];
    if(color == outColor){
      this.getColor();
    }
    if(ignoreWhite && outColor == "white"){
      this.getColor();
    }
    return this.colors[index];
  }

  gameOver(){
    this.music.stop();
    window.location = "#/gameover/";
  }

  reset(){
    this.points = 0;
    this.activeColor = "red";
  }
  
}
