"use strict";
var isChanged = false;
function onChangeContent() {
  if (isChanged) {
    document.getElementById("demo").innerHTML = "";
  } else {
    document.getElementById("demo").innerHTML = "Javascript";
  }

  isChanged = !isChanged;
}

const handleOnLight = () => {
  document.getElementById("myImage").src =
    "https://www.w3schools.com/js/pic_bulbon.gif";
};

const handleOffLight = () => {
  document.getElementById("myImage").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
};
