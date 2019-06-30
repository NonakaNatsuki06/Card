var card_count = 28;







// 画像を指定した枚数分を表示する
function showCard(card, text){
  var _html = '';
  for (var i = 0; i < card; i ++){
    _html += '<img src="img/カード.png" id="1" class="card"></li>';
  }
  $('.card_area').html(_html);
}

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

function cardOpen() {
  var card_num = [j_0, j_0, s_1, s_2, s_3, s_4, s_5, s_6, s_7, s_8, s_9, s_10, s_11, s_12, s_13, h_1, h_2, h_3, h_4, h_5, h_6, h_7, h_8, h_9, h_10, h_11, h_12, h_13];
  var shuffle_card_num = _.shuhlle(card_num);
  for (var i=0; i<shuffle_card_num.length; i++){
  }
  $('.card_area img').click(function() {
    $(this).attr('src', 'img/' + shuffle_card_num + '.png');
    });
}


$(function() {
  showCard(card_count);
  changeHoverActive('.start');
  attrDisabled('.reset button');
  attrDisabled('.card_area img');
  $('.start button').click(function() {
    changeHoverActive('.start');
    changeHoverActive('.reset');
    attrDisabled('.start button');
    removeDisabled('.reset button');
    removeDisabled('.card_area img');
    cardOpen();
  });

  $('.reset button').click(function() {
    changeHoverActive('.reset');
    changeHoverActive('.start');
    attrDisabled('.reset button');
    removeDisabled('.start button');
  });

});

















