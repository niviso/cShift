import {Howl, Howler} from 'howler';
export class Home{
    constructor(){
      this.sound = null;
    }

    attached(){
      this.sound = new Howl({
        src: ['resources/start.mp3'],
        loop: true
      });

      this.sound.play();
    }

    start(){
      this.sound.stop();
      window.location = "#/game"
    }



}
