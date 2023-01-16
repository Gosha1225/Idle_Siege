import setUrls from "./utils/url";
("./utils/url");
import "../styles/reset.css";
import "../styles/global.css";
import "../styles/index.css";
import "../styles/fonts.css";
import handleResize from "./utils/resize";
import "./utils/images";
import {
  armyFromAnimation,
  armyToAnimation,
  arrowAnimation,
  barrackAnimation,
  chooseAnimation,
  downloadBtnAnimation,
  finalScreenAnimation,
  firstIconAnimation,
  goldTextAnimation,
  greenBarrackAnimation,
  healthBarAnimation,
  iconsAnimation,
  iconsDownAnimation,
  platformAnimation,
  sliderAnimation,
  sliderDownAnimation,
  summonBtnAnimation,
} from "./utils/animation";

const isDap = true;

const constructionPlatform = document.querySelector(".platform");

async function hideGreenBarrack() {
  return new Promise((res) => {
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

async function platformListener(event) {
  document.querySelector(".arrow-container").remove();
  platformAnimation();
  await greenBarrackAnimation();
  iconsAnimation();
}

async function summonBtnListener(event) {
  await summonBtnAnimation();
  await sliderDownAnimation();
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

async function iconListener(event) {
  constructionPlatform.remove();
  goldTextAnimation();
  await hideGreenBarrack();
  await firstIconAnimation();
  await barrackAnimation();
  await iconsDownAnimation();
  sliderAnimation();
}

function startApp() {
  handleResize();

  document.querySelectorAll(".link").forEach((el) => {
    if (isDap) {
      try {
        el.addEventListener("pointerdown", userClickedDownloadButton);
      } catch (e) {}
    } else
      try {
        el.addEventListener("pointerdown", setUrls);
      } catch (e) {}
  });

  window.addEventListener("resize", handleResize);

  arrowAnimation();
  constructionPlatform.addEventListener("pointerdown", platformListener);

  document
    .querySelector(".icon1")
    .addEventListener("pointerdown", iconListener);
  document
    .querySelector(".summon-btn")
    .addEventListener("pointerdown", summonBtnListener);
}

startApp();

// if (mraid.getState() === "loading") {
//   // If the SDK is still loading, add a listener for the 'ready' event:
//   mraid.addEventListener("ready", onSdkReady);
// } else {
//   // Otherwise, if the SDK is ready, execute your function:
//   onSdkReady();
// }

// // Implement a function that shows the ad when it first renders:
// function onSdkReady() {
//   // The viewableChange event fires if the ad container's viewability status changes.
//   // Add a listener for the viewabilityChange event, to handle pausing and resuming:
//   mraid.addEventListener("viewableChange", viewableChangeHandler);
//   // The isViewable method returns whether the ad container is viewable on the screen.
//   if (mraid.isViewable()) {
//     try {
//       mraid?.getMaxSize();
//       mraid?.getState();
//     } catch (e) {}
//     // If the ad container is visible, play the ad:
//     showMyAd();
//   }
// }

// // Implement a function for executing the ad:
// function showMyAd() {
//   // Insert code for showing your playable ad.
//   startApp();
// }

// // Implement a function that handles pausing and resuming the ad based on visibility:
// function viewableChangeHandler(viewable) {
//   if (viewable) {
//     // If the ad is viewable, show the ad:
//     showMyAd();
//   } else {
//     // If not, pause the ad.
//   }
// }

// //IRONSOURCE
// window.onload = function () {
//   dapi.isReady()
//     ? onReadyCallback()
//     : dapi.addEventListener("ready", onReadyCallback);
//   //here you can put other code that not related to dapi logic
// };

// function onReadyCallback() {
//   //no need to listen to this event anymore
//   dapi.removeEventListener("ready", onReadyCallback);
//   let isAudioEnabled = !!dapi.getAudioVolume();

//   if (dapi.isViewable()) {
//     adVisibleCallback({ isViewable: true });
//   }
//   dapi.isViewable() ? startGame() : false;

//   dapi.addEventListener("viewableChange", adVisibleCallback);
//   dapi.addEventListener("adResized", adResizeCallback);
//   dapi.addEventListener("audioVolumeChange", audioVolumeChangeCallback);
// }

// try {
//   mraid?.getMaxSize();
//   mraid?.getState();
// } catch (e) {}

// function startGame() {
//   var screenSize = dapi.getScreenSize();
//   startApp();
// }

// function userClickedDownloadButton() {
//   setUrls();
// }

// function adVisibleCallback(event) {
//   console.log("isViewable " + event.isViewable);
//   if (event.isViewable) {
//     const screenSize = dapi.getScreenSize();
//     //START or RESUME the ad
//   } else {
//     //PAUSE the ad and MUTE sounds
//   }
// }

// function adResizeCallback(event) {
//   const screenSize = event;
//   console.log(
//     "ad was resized width " + event.width + " height " + event.height
//   );
//   handleResize();
// }

// function audioVolumeChangeCallback(volume) {
//   let isAudioEnabled = !!volume;

//   if (volume >= 0) {
//     console.log(volume);
//   }

//   if (isAudioEnabled) {
//     //START or turn on the sound
//   } else {
//     //PAUSE the turn off the sound
//   }
// }
