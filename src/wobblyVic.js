var WobblyVic = function(top, left, timeBetweenSteps){


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
};

WobblyVic.prototype = Object.create(Dancer.prototype);
WobblyVic.prototype.constructor = WobblyVic;

// WobblyVic.prototype.step = function(){
//   // call the old version of step at the beginning of any call to this new version of step
//   //this.oldStep.call(this);
//   // this.step.bind(this);
//   this.oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.css({"border-radius": "50px", opacity: 0.6, "border": "50px solid #" + randomColor});
// };
//
WobblyVic.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep.call(this);
  // this.step.bind(this);
  //this.oldStep();
  this.$node.removeClass("dancer");
  this.$node.addClass("animated wobble infinite vic");
};
