var MultiBlinkyDancer = function(top, left, timeBetweenSteps){

  //this.oldStep = Dancer.prototype.step;
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="multidancer"></span>');
};

MultiBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
MultiBlinkyDancer.prototype.constructor = MultiBlinkyDancer;

// MultiBlinkyDancer.prototype.step = function(){
//   this.multiColor();
//   // this.$node.setAttribute(class, 'multidancer');
//   this.oldStep();

//   this.$node.toggle();


// };


MultiBlinkyDancer.prototype.multiColor = function(){
  // var randomColor = Math.floor(Math.random()*16777215).toString(16);
  // // this.styleSettings = {
  // //   border: 10px solid yellow;
  // // };
  // //
  // //
  // this.$node.setAttribute(class, 'multidancer');
  // this.$node.css(this.styleSettings);
};
