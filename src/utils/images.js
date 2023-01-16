import firstBackground from "../../assets/BG.png";

import wallUp from "../../assets/trim/Gate_Wall_02.png";
import wallDown from "../../assets/trim/Gate_Wall_01.png";
import broken from "../../assets/structures/Destroyed_Wall.png";
import gate from "../../assets/trim/Gate.png";
import column from "../../assets/trim/Column.png";
import castle from "../../assets/trim/Castle.png";

import arrow from "../../assets/arrow_down.png";
import platform from "../../assets/new/rend/plus_plane.png";
import barrack from "../../assets/trim/Barak_01.png";

import runFrom from "../../assets/bottom-run.gif";
import runTo from "../../assets/marauder_up.gif";
import attack from "../../assets/attack.gif";

import finalScreen from "../../assets/BG_EndCard.jpg";

import download from "../../assets/DN.png";

import coin from "../../assets/Icon_Coin.png";
import heart from "../../assets/Heart.png";

import chooseBuilding from "../../assets/ChooseBuilding.png";
import icon1 from "../../assets/tinified/Camp_preview_new_0.png";
import icon2 from "../../assets/tinified/Ram_Camp.png";

import panel from "../../assets/LootCamp.png";
import summonBtn from "../../assets/SummonArmy.png";

const icons = [icon1, icon2];

setSource(document.querySelector(".arrow"), arrow);

setSource(document.querySelector(".choose-building"), chooseBuilding);
setSource(document.querySelector(".panel"), panel);
setSource(document.querySelector(".summon-btn"), summonBtn);

setSource(document.querySelector(".price-coin1"), coin);
setSource(document.querySelector(".price-coin2"), coin);
setSource(document.querySelector(".gold-coin"), coin);
setSource(document.querySelector(".heart"), heart);

document.querySelectorAll(".icon").forEach((icon, index) => {
  setSource(icon, icons[index]);
});

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
setSource(document.querySelector(".barrack"), barrack);

document
  .querySelectorAll(".soldier-from")
  .forEach((el) => setSource(el, runFrom));
document.querySelectorAll(".soldier-to").forEach((el) => setSource(el, runTo));
document
  .querySelectorAll(".soldier-attack")
  .forEach((el) => setSource(el, attack));

setSource(document.querySelector(".secondbackground"), finalScreen);

setSource(document.querySelector(".download"), download);

function setSource(el, source) {
  el.src = el.src || source;
}
