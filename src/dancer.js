// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
//
// this.styleSettings.top = top;
// this.styleSettings.left = left;
this.styleSettings = {
  top: top,
  left : left
};
  // top : top,
  // left : left
  // this.top: top;
  // this.left: left;
this.$node.css(this.styleSettings);
};

Dancer.prototype.middleSchoolMode = function() {
  for (var i = 0; i<window.dancers.length; i++) {
    if (i%2===0) {
      window.dancers[i].setPosition(this.top, 200);
    } else {
     window.dancers[i].setPosition(this.top, 900);
    }
  }
};


