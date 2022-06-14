import anime from "animejs";

export function finalScreenAnimation() {
  anime({
    targets: ".final-screen",
    top: "0px",
    duration: 900,
    delay: 500,
    easing: "easeInOutQuart",
  });
}

export function downloadBtnAnimation() {
  anime({
    targets: ".download",
    scale: [
      { value: 0.5 },
      { value: 0.53, duration: 2000 },
      { value: 0.5, duration: 2000 },
    ],
    loop: true,
    easing: "linear",
  });
}

export function scaleAnimation() {
  anime({
    targets: ".coin",
    scale: [
      { value: 0, duration: 500 },
      { value: 1, duration: 500 },
    ],
  });
}

export function chooseAnimation(target) {
  anime({
    targets: target,
    scale: [
      { value: 1, duration: 80 },
      { value: 0.9, duration: 80 },
      { value: 1, duration: 80 },
    ],
    easing: "linear",
  });
}

export function opacityAnimation(target) {
  anime({
    targets: target,
    opacity: [
      { value: 0, duration: 200 },
      { value: 1, duration: 200 },
    ],
    easing: "linear",
  });
}

export function armyFromAnimation() {
  return new Promise((res) =>
    anime({
      targets: ".army-from",
      complete: res,
      top: 460,
      left: 170,
      duration: 700,
      easing: "linear",
    })
  );
}

export function armyToAnimation() {
  return new Promise((res) =>
    anime({
      targets: ".army-to",
      complete: res,
      top: 370,
      left: 190,
      duration: 1300,
      easing: "linear",
    })
  );
}

export function greenBarrackAnimation() {
  return new Promise((res) => {
    anime({
      targets: ".clickbarrack",
      complete: res,
      scale: 0.44,
      duration: 150,
      easing: "linear",
    });
  });
}

export function barrackAnimation() {
  return new Promise((res) => {
    anime({
      targets: ".barrack",
      complete: res,
      scale: 0.48,
      duration: 200,
    });
  });
}

export function healthBarAnimation() {
  return new Promise((res) => {
    anime({
      targets: ".health",
      complete: res,
      delay: 500,
      width: [
        { value: "100%", duration: 0 },
        { value: "50%", duration: 700 },
        { value: "50%", duration: 500 },
        { value: "0%", duration: 700 },
      ],
      easing: "linear",
    });
  });
}
