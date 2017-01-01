var setBasicSpriteStyle = function(domObj) {
  domObj.style.backgroundImage = "url('" + SPRITE_URL + "')";
  domObj.style.width = SPRITE_WIDTH + 'px';
  domObj.style.height = SPRITE_HEIGHT + 'px';
};

var setSpriteSrcOffsets = function(domObj, horizontalOffset, verticalOffset) {
  domObj.style.backgroundPosition = (-horizontalOffset) + 'px ' + (-verticalOffset) + 'px ';
};
