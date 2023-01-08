export default function displayBackToTopButton() {
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    if (window.scrollY > 100) {
      backToTop.classList.remove('btHidden');
      backToTop.classList.add('btVisible');
    } else {
      backToTop.classList.add('btHidden');
      backToTop.classList.remove('btVisible');
    }
  }
}
