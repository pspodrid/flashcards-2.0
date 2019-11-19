// import $ from 'jquery';
export class Player {
  constructor() {
    this.score = 0;
  }

  correctAnswer() {
    this.score += 1;
    alert(this.score);
    clearTimeout();
  }

  incorrectAnswer() {
    this.score -= 1;
    alert(this.score);
  }

  protoTimer() {
    setTimeout(function() {
    }, 10000);
  }
  getRidOf() {
    setTimeout(function(){
    }, 3000);
  }
  // test() {
  //   $(this).parent().parent().parent().remove();
  // }
}
