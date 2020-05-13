addEventListener("keydown", function (event) {
  if (event.keyCode == 86) document.body.style.background = "violet";
});

addEventListener("keyup", function (event) {
  if (event.keyCode == 86) document.body.style.background = "";
}); 

addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  this.console.log(audio);
  audio.play();
  // const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //if(!audio) return;
  //audio.play();
}); 
