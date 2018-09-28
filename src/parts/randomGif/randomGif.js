
export class randomGif{

  constructor(){
  }

  attached(){
    this.gifs = [
      "http://gifimage.net/wp-content/uploads/2017/07/dancing-monkey-gif-2.gif",
      "https://i.pinimg.com/originals/d1/6d/91/d16d91fed844209ac6289f41841a3408.gif",
      "http://www.sanjaygandhianimalcarecentre.org/images/preloaders/13.gif",
      "https://camo.envatousercontent.com/b7a2ca7d6a4c3db3c132c073e2129f41e1a34323/687474703a2f2f64696c65747461636174612e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f30312f6f75747075745f6239303676452e676966",
      "https://sunveter.ru/uploads/posts/2017-05/1493842393_citten1.gif"
    ];

    this.index = Math.floor(Math.random() * this.gifs.length);

    this.myGif = this.gifs[this.index];
  }


}
