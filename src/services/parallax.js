/**
 * It takes the distance between the top of the element and the top of the viewport, and uses that to
 * calculate the background position of the element
 * @param {import("react").MutableRefObject} elmWrapper - This is the ref of the element wrapper that you want to apply the parallax effect to.
 * @param {string} elmClassName - The class name of the element you want to apply the parallax effect to.
 * @returns {void} - It doesn't return anything. It just applies the parallax effect to the element. You can use it in the useEffect hook.
 */
export default function parallax(elmWrapper, elmClassName) {
  if (!elmWrapper.current) return;
  let backgroundPositionY = 0;
  const elmOffsetTop = elmWrapper.current.offsetTop;
  const scrollPosition = window.scrollY;
  const diff = elmOffsetTop - scrollPosition;
  const windowHeight = window.innerHeight;
  backgroundPositionY = (diff * 100) / windowHeight;
  if (backgroundPositionY > 100) backgroundPositionY = 100;
  else if (backgroundPositionY < 0) backgroundPositionY = 0;

  const parallaxElm = document.querySelector(elmClassName);
  if (parallaxElm) {
    // @ts-ignore
    parallaxElm.style.backgroundPosition = `50% ${backgroundPositionY}%`;
  }
}
