
import $ from "jquery";

export class Quotes{

  constructor(){
  }

  attached(){
    this.quotes = [
      "You go bud!",
      "Wow, amazing!!!!",
      "Where are my chicken nuggets??",
      "Voff",
      "I like treats",
      "We goin for a walk????!!"
    ];
    this.index = Math.floor(Math.random() * this.quotes.length);
    this.quote = this.quotes[this.index];

    setInterval(x=>{
      
      $(this.quotesBox).fadeOut(1000).fadeIn(1000);
      setTimeout(x=>{
        this.index = Math.floor(Math.random() * this.quotes.length);
        this.quote = this.quotes[this.index];
      },1000);


    },5000);
  }


}
