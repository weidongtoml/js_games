// creates a landmark
var createLandMark = function(domId, landmarkType) {
  var domObj = document.getElementById(domId);
  setBasicSpriteStyle(domObj);

  var init = function() {
    var horizontalOffset = LANDMARK_TO_H_OFFSET[landmarkType];
    var verticalOffset = LANDMARK_TO_V_OFFSET[landmarkType]
    console.log('landmark offsets:' + horizontalOffset + ',' + verticalOffset);
    setSpriteSrcOffsets(domObj, horizontalOffset, verticalOffset);
  };

  return {
    init: init,
    update: function() {}
  };
};


var showLandMarks = function() {
  var gemDom = document.getElementById('landmarks');
  var i;
  var node;
  var nodeId;
  var curGem;
  for (i = 0; i < ALL_LANDMARKS.length; ++i) {
    nodeId = 'landmark_' + ALL_LANDMARKS[i];
    node = document.createElement('div');
    node.id = nodeId;
    gemDom.appendChild(node);
    curGem = createLandMark(nodeId, ALL_LANDMARKS[i]);
    curGem.init();
  }
};
