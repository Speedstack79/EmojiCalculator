var EmojiState = true,
    ButtonToggle = document.getElementById('ButtonToggle'),
    EmojiNum = document.getElementsByClassName('emojiNum');
    EmojiTextBoxInput = '<input type="text" id="EmojiTextBoxInput" name="name" value="">'
    EmojiTextBoxPara = '<p id="EmojiTextBoxPara" class="emojitext"></p>'

function EmojiToggle(){
  if (EmojiState) {
    EmojiState = false;
    value = 0;
    TotalNum = new Array();
    $("#EmojiTextBoxPara").remove();
    $(EmojiTextBoxInput).appendTo("#InsertEmoji");
    ButtonToggle.className = "btn btn-info col-md-offset-8";
    ButtonToggle.innerHTML = "Swith to emoji";
    emojiToNum();
  }
  else {
    EmojiState = true;
    value = 0;
    TotalNum = new Array();
    $("#EmojiTextBoxInput").remove();
    $(EmojiTextBoxPara).appendTo("#InsertEmoji");
    ButtonToggle.className = "btn btn-warning col-md-offset-8";
    ButtonToggle.innerHTML = "Swith to numbers";
    numToEmoji();
  }
}

function numToEmoji(){
  var i = 0;
  while (i < EmojiNum.length) {
    switch (EmojiNum[i].innerHTML) {
      case "9":
      EmojiNum[i].innerHTML = ":snail:";
      break;
      case "8":
      EmojiNum[i].innerHTML = ":ghost:";
      break;
      case "7":
      EmojiNum[i].innerHTML = ":space_invader:";
      break;
      case "6":
      EmojiNum[i].innerHTML = ":eggplant:";
      break;
      case "5":
      EmojiNum[i].innerHTML = ":lollipop:";
      break;
      case "4":
      EmojiNum[i].innerHTML = ":revolving_hearts:";
      break;
      case "3":
      EmojiNum[i].innerHTML = ":sunglasses:";
      break;
      case "2":
      EmojiNum[i].innerHTML = ":two_hearts:";
      break;
      case "1":
      EmojiNum[i].innerHTML = ":point_up:";
      break;
      case "0":
      EmojiNum[i].innerHTML = ":ok_woman:";
      break;
    }
    i++;
  }
  GenEmoji();
}

function emojiToNum(){
  var i = 0;
  while (i < EmojiNum.length) {
    switch (EmojiNum[i].innerHTML) {
      case '<object class="emojione" data="emojione-master/assets/svg/1f47e.svg?v=2.2.2" type="image/svg+xml" standby="👾">👾</object>':
      EmojiNum[i].innerHTML = "7";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/1f47b.svg?v=2.2.2" type="image/svg+xml" standby="👻">👻</object>':
      EmojiNum[i].innerHTML = "8";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/1f40c.svg?v=2.2.2" type="image/svg+xml" standby="🐌">🐌</object>':
      EmojiNum[i].innerHTML = "9";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/1f49e.svg?v=2.2.2" type="image/svg+xml" standby="💞">💞</object>':
      EmojiNum[i].innerHTML = "4";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/1f36d.svg?v=2.2.2" type="image/svg+xml" standby="🍭">🍭</object>':
      EmojiNum[i].innerHTML = "5";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/1f346.svg?v=2.2.2" type="image/svg+xml" standby="🍆">🍆</object>':
      EmojiNum[i].innerHTML = "6";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/261d.svg?v=2.2.2" type="image/svg+xml" standby="☝">☝</object>':
      EmojiNum[i].innerHTML = "1";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/1f495.svg?v=2.2.2" type="image/svg+xml" standby="💕">💕</object>':
      EmojiNum[i].innerHTML = "2";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/1f60e.svg?v=2.2.2" type="image/svg+xml" standby="😎">😎</object>':
      EmojiNum[i].innerHTML = "3";
      break;
      case '<object class="emojione" data="emojione-master/assets/svg/1f646.svg?v=2.2.2" type="image/svg+xml" standby="🙆">🙆</object>':
      EmojiNum[i].innerHTML = "0";
      break;
    }
    i++;
  }
}
