import "../styles/reset.css";
import "../styles/global.css";
import "../styles/index.css";
import "../styles/fonts.css";
import handleResize from "./utils/resize";
import "./utils/images";
import {
  armyFromAnimation,
  armyToAnimation,
  barrackAnimation,
  downloadBtnAnimation,
  finalScreenAnimation,
  greenBarrackAnimation,
  healthBarAnimation,
} from "./utils/animation";

handleResize();

function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    document.querySelector(".link1").href =
      "https://play.google.com/store/apps/details?id=com.ludigames.android.anmp.idle.siege&hl=ru&gl=US";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    document.querySelector(".link1").href =
      "https://apps.apple.com/us/app/idle-siege-army-tycoon-game/id1527417124";
  }

  return "unknown";
}

getMobileOperatingSystem();

const barrack = document.querySelector(".clickbarrack");

async function hideGreenBarrack() {
  return new Promise((res) => {
    barrack.removeEventListener("pointerdown", listener);
    document.querySelector(".clickbarrack").classList.add("hidden");
    document.querySelector(".barrack").classList.remove("hidden");
    res();
  });
}

async function appearArmyFrom() {
  return new Promise((res) => {
    document.querySelectorAll(".soldier-from").forEach((el) => {
      el.classList.remove("hidden");
    });
    res();
  });
}

async function hideArmyFrom() {
  return new Promise((res) => {
    document.querySelectorAll(".soldier-from").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".soldier-to").forEach((el) => {
      el.classList.remove("hidden");
    });
    res();
  });
}

async function hideArmyTo() {
  return new Promise((res) => {
    document.querySelectorAll(".soldier-to").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".soldier-attack").forEach((el) => {
      el.classList.remove("hidden");
    });
    res();
  });
}

async function hideGate() {
  return new Promise((res) => {
    document.querySelector(".gate").classList.add("hidden");
    document.querySelector(".broken1").classList.remove("hidden");
    document.querySelector(".broken2").classList.remove("hidden");
    res();
  });
}

async function listener(event) {
  await greenBarrackAnimation();
  await hideGreenBarrack();
  await barrackAnimation();
  await appearArmyFrom();
  await armyFromAnimation();
  await hideArmyFrom();
  await armyToAnimation();
  await hideArmyTo();
  await healthBarAnimation();
  await hideGate();
  finalScreenAnimation();
  downloadBtnAnimation();
}

barrack.addEventListener("pointerdown", listener);
