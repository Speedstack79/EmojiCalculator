emojione.imageType = "svg";
emojione.imagePathSVG = "emojione-master/assets/svg/";
var emojiarray = document.getElementsByClassName("emojitext"),
	input = document.getElementById("InputEmoji");

  function GenEmoji() {
  	var i = 0;
  	while(i < emojiarray.length){
  		emojiarray[i].innerHTML = emojione.shortnameToImage(emojiarray[i].innerHTML);
  		i++;
  	}
  }
