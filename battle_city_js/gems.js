// creates a Gem that can be picked up by the user to do upgrade
var createGem = function(domId, gemType) {
  var domObj = document.getElementById(domId);
  setBasicSpriteStyle(domObj);

  var init = function() {
    var horizontalOffset = GEM_INIT_H_OFFSET + GEM_TO_H_OFFSET[gemType] * GEM_H_OFFSET_SIZE;
    setSpriteSrcOffsets(domObj, horizontalOffset, GEM_INIT_V_OFFSET);
  };

  return {
    init: init,
    update: function() {}
  };
};

var showGems = function() {
  var gemDom = document.getElementById('gems');
  var i;
  var node;
  var nodeId;
  var curGem;
  for (i = 0; i < ALL_GEMS.length; ++i) {
    nodeId = 'gem_' + ALL_GEMS[i];
    node = document.createElement('div');
    node.id = nodeId;
    gemDom.appendChild(node);
    curGem = createGem(nodeId, ALL_GEMS[i]);
    curGem.init();
  }
};
