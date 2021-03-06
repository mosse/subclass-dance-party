$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height()/2 * Math.random() + $("body").height()*0.28,
      $("body").width() * Math.random() * 0.9 + $("body").width() * 0.03,
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".addMiddleSchoolModeButton").on("click", function(event) {
    Dancer.prototype.middleSchoolMode();
  });

  $("body").delegate(".vic", "mouseover", function(){
    console.log("inside mouseover");
    $(this).removeClass("wobble").addClass("flip");
  });

  $("body").delegate(".vic", "mouseout", function(){
    console.log("inside mouseover");
    $(this).removeClass("flip").addClass("wobble");
  });
});

