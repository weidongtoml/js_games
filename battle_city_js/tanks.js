// TODO: refactor this to proper OO style
var createTank = function(domId, tankType, tankLevel, color, direction) {
  var domObj = document.getElementById(domId, color);

  // TODO: will need to add coordiate, and probably make curStep function of the coordiate
  var state = {
    type: 'tank',
    tankColor: color,
    direction: direction,
    curStep: 0,
    stepSize: 2,
    tankType: tankType,
    tankLevel: tankLevel,
    domObj: domObj
  };

  var init = function() {
    setBasicSpriteStyle(domObj);
    render();
  };

  var render = function() {
    var horizontalOffset = DIRECTION_TO_H_OFFSET[state.direction] * DIRECTION_OFFSET_SIZE +
        TANK_COLOR_TO_H_OFFSET[state.tankColor] * TANK_COLOR_OFFSET_SIZE +
        state.curStep * STEP_OFFSET_SIZE;

    var verticalOffset = TANK_TYPE_TO_OFFSET[state.tankType] * 4 * 16 + state.tankLevel * 16 +
        TANK_COLOR_TO_V_OFFSET[state.tankColor] * TANK_COLOR_OFFSET_SIZE;

    //           console.log('horizontalOffset:' + horizontalOffset);
    //           console.log('verticalOffset:' + verticalOffset);

    setSpriteSrcOffsets(domObj, horizontalOffset, verticalOffset);

  };

  var update = function() {
    state.curStep = (state.curStep + 1) % state.stepSize;
    render();
  };

  return {
    init: init,
    update: update
  }
};


var showTanks = function() {

  var tanks = [
    createTank('tank0', TANK_TYPE_SLOW, 0, TANK_COLOR_GOLD, DIRECTION_UP),
    createTank('tank1', TANK_TYPE_SLOW, 1, TANK_COLOR_GREEN, DIRECTION_LEFT),
    createTank('tank2', TANK_TYPE_FAST, 2, TANK_COLOR_SILVER, DIRECTION_DOWN),
    createTank('tank3', TANK_TYPE_FAST, 3, TANK_COLOR_RED, DIRECTION_RIGHT)
  ];

  var i = 0;
  for (i = 0; i < tanks.length; ++i) {
    tanks[i].init();
  }

  setInterval(function(){
    var i = 0;
    for (i = 0; i < tanks.length; ++i) {
      tanks[i].update();
    }
  }, 500);
};
