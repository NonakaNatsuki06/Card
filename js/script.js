/*
function cardTurn () {
  var card_num = _.random(0, 11);
  $('td img').click(function() {
    $(this).attr('src', 'img/No_' + card_num + '.png');
  });
}

function reset () {
  $('.reset button').click(function() {
    $('td img').attr('src', 'img/カード.png');
  });
}


$(function() {
  cardTurn();
  cardTurn();
  reset();
});
*/

// 指定したクラスのhoverを切り替える
function changeHoverActive(className) {
  $(className).toggleClass('hover_ignore');
}

// 指定したクラスを操作できなくさせる
function attrDisabled(className) {
  $(className).attr('disabled');
}

// 指定したクラスを操作できるようにする
function removeDisabled(className) {
  $(className).removeAttr('disabled');
}


$(function() {
  changeHoverActive('.start');
  attrDisabled('.reset button');
  $('.start button').click(function() {
    changeHoverActive('.start');
    changeHoverActive('.reset');
    attrDisabled('.start button');
    removeDisabled('.reset button');
  });

  $('.reset button').click(function() {
    changeHoverActive('.reset');
    changeHoverActive('.start');
    attrDisabled('.reset button');
    removeDisabled('.start button');
  });

});

















