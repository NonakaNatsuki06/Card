



function changeHoverActive(className) {
  $(className).toggleClass('hover_ignore');
}

function attrDisabled(className) {
  $(className).attr('disabled');
}

function removeDisabled(className) {
  $(className).removeAttr('disabled');
}

function cardTurn () {
  var card_num = _.random(0, 11);
  $('td img').click(function() {
    $(this).attr('src', 'img/No_' + card_num + '.png');
  });
}

function reset () {
  $('.reset buttom').click(function() {
    $('td img').attr('src', 'img/カード.png');
  });
}


$(function() {
  cardTurn();
  cardTurn();
  reset();
});


