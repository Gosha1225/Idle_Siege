const wrapper = document.getElementById("scalable-wrapper");
const wrapperContent = document.getElementById("scalable-wrapper__content");
const elHeight = wrapperContent.offsetHeight;
const elWidth = wrapperContent.offsetWidth;

function handleResize() {
  const scale = Math.min(
    wrapper.offsetWidth / elWidth,
    wrapper.offsetHeight / elHeight
  );
  wrapperContent.style.transform = `translate(-50%, -50%) scale(${scale})`;
  wrapperContent.dataset.scale = scale
}

export default handleResize;
