import firstBackground from "../../assets/first_background.png";

import wallUp from "../../assets/structures/wall-up.png";
import wallDown from "../../assets/structures/wall-down.png";
import broken from "../../assets/structures/Destroyed_Wall.png";
import gate from "../../assets/structures/Gate.png";
import column from "../../assets/structures/Column.png";
import castle from "../../assets/structures/Castle.png";

import platform from "../../assets/structures/Platform.png";
import barrack from "../../assets/structures/Barrack.png";
import clickBarrack from "../../assets/structures/Barrack_green.png";
import structure from "../../assets/structures/Structure.png";

import runFrom from "../../assets/character_anim/Run_from_anim.gif";
import runTo from "../../assets/character_anim/Run_to_anim.gif";
import attack from "../../assets/character_anim/Attack_anim.gif";

import finalScreen from "../../assets/Final_screen.png";

import appStore from "../../assets/App_Store.png";
import googlePlay from "../../assets/Google_play.png";
import download from "../../assets/DOWNLOAD_NOW.png";

setSource(document.querySelector(".firstbackground"), firstBackground);

document.querySelectorAll(".wall-up").forEach((wall) => {
  setSource(wall, wallUp);
});

document.querySelectorAll(".wall-down").forEach((wall) => {
  setSource(wall, wallDown);
});

setSource(document.querySelector(".broken1"), broken);
setSource(document.querySelector(".broken2"), broken);
setSource(document.querySelector(".gate"), gate);
setSource(document.querySelector(".column"), column);
setSource(document.querySelector(".castle"), castle);

document.querySelectorAll(".platform").forEach((el) => setSource(el, platform));
setSource(document.querySelector(".structure"), structure);
setSource(document.querySelector(".barrack"), barrack);
setSource(document.querySelector(".clickbarrack"), clickBarrack);

document
  .querySelectorAll(".soldier-from")
  .forEach((el) => setSource(el, runFrom));
document.querySelectorAll(".soldier-to").forEach((el) => setSource(el, runTo));
document
  .querySelectorAll(".soldier-attack")
  .forEach((el) => setSource(el, attack));

setSource(document.querySelector(".secondbackground"), finalScreen);

setSource(document.querySelector(".download"), download);
setSource(document.querySelector(".app-store"), appStore);
setSource(document.querySelector(".google-play"), googlePlay);

function setSource(el, source) {
  el.src = el.src || source;
}
