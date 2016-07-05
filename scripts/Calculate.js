var TotalNum = new Array(),
    value = 0,
    EmojiResult = "",
    result = 0;

function CalcEmoji(){
  if (EmojiState) {
    var CalcNum = document.getElementById('EmojiTextBoxPara').innerHTML.split(/[><]/).filter(function(e){return e;});
    for(var i = 0; i < CalcNum.length; i++){
      switch (CalcNum[i]) {
        case "🐌":
          value = value+"9";
          break;
          case "👻":
            value = value+"8";
            break;
            case "👾":
              value = value+"7";
              break;
              case "🍆":
                value = value+"6";
                break;
                case "🍭":
                  value = value+"5";
                  break;
                  case "💞":
                    value = value+"4";
                    break;
                    case "😎":
                      value = value+"3";
                      break;
                      case "💕":
                        value = value+"2";
                        break;
                        case "☝":
                          value = value+"1";
                          break;
                          case "🙆":
                            value = value+"0";
                            break;
                            case ".":
                              value = value+".";
                              break;
                              case "-":
                                value = "-"+value;
                                break;
      }
    }
   value = Number(value);
  }
  else {
    if(isNaN(document.getElementById('EmojiTextBoxInput').value)){
      alert("Please insert a valid number");
      document.getElementById('EmojiTextBoxInput').value = "";
    }
    else {
          value = value + Number(document.getElementById('EmojiTextBoxInput').value);
    }
  }
}

function Equate(){
  CalcEmoji();
  TotalNum.push(value);
  value = 0;
  if (EmojiState) {
    document.getElementById('EmojiTextBoxPara').innerHTML = "";
  }
  else {
    document.getElementById('EmojiTextBoxInput').value = "";
  }
   result = eval(TotalNum.join(""));
  TotalNum = new Array();
  document.getElementById('NumResult').innerHTML = "Numerical Result:"+result;
  ResultToEmoji();
  }

function add(){
  CalcEmoji();
  TotalNum.push(value,"+");
  value = 0
  if (EmojiState) {
    document.getElementById('EmojiTextBoxPara').innerHTML = "";
  }
  else {
    document.getElementById('EmojiTextBoxInput').value = "";
  }
  document.getElementById('operator').src = "images/plus.png"
}

function sub(){
  CalcEmoji();
  TotalNum.push(value,"-");
  value = 0
  if (EmojiState) {
    document.getElementById('EmojiTextBoxPara').innerHTML = "";
  }
  else {
    document.getElementById('EmojiTextBoxInput').value = "";
  }
  document.getElementById('operator').src = "images/sub.png"
}

function div(){
  CalcEmoji();
  TotalNum.push(value,"/");
  value = 0
  if (EmojiState) {
    document.getElementById('EmojiTextBoxPara').innerHTML = "";
  }
  else {
    document.getElementById('EmojiTextBoxInput').value = "";
  }
  document.getElementById('operator').src = "images/div.png"
}

function multi(){
  CalcEmoji();
  TotalNum.push(value,"*");
  value = 0
  if (EmojiState) {
    document.getElementById('EmojiTextBoxPara').innerHTML = "";
  }
  else {
    document.getElementById('EmojiTextBoxInput').value = "";
  }
  document.getElementById('operator').src = "images/mult.png"
}

function ResultToEmoji(){
  var EmojiVal = String(result).split("");
  for(var i = 0; i<EmojiVal.length; i++){
    switch (EmojiVal[i]) {
      case "9":
      EmojiResult = EmojiResult + ":snail:"
        break;
        case "8":
        EmojiResult = EmojiResult + ":ghost:"
          break;
          case "7":
          EmojiResult = EmojiResult + ":space_invader:"
            break;
            case "6":
            EmojiResult = EmojiResult + ":eggplant:"
              break;
              case "5":
              EmojiResult = EmojiResult + ":lollipop:"
                break;
                case "4":
                EmojiResult = EmojiResult + ":revolving_hearts:"
                  break;
                  case "3":
                  EmojiResult = EmojiResult + ":sunglasses:"
                    break;
                    case "2":
                    EmojiResult = EmojiResult + ":two_hearts:"
                      break;
                      case "1":
                      EmojiResult = EmojiResult + ":point_up:"
                        break;
                        case "0":
                        EmojiResult = EmojiResult + ":ok_woman:"
                          break;
                          case ".":
                          EmojiResult = EmojiResult + "."
                            break;
                            case "-":
                            EmojiResult = EmojiResult + "-"
                              break;
    }
  }
  document.getElementById('EmojiResult').innerHTML = "Emoji Result:"+EmojiResult;
  GenEmoji();
  EmojiResult = new Array();
}
