export default function displayBackToTopButtonAndHeaderFixed() {
  const backToTop = document.getElementById('backToTop');
  const headerFixed = document.getElementById('headerFixed');
  if (backToTop && headerFixed) {
    if (window.scrollY > 100) {
      headerFixed.classList.remove('headerFixedHidden');
      headerFixed.classList.add('headerFixedVisible');
      backToTop.classList.remove('btHidden');
      backToTop.classList.add('btVisible');
    } else {
      headerFixed.classList.remove('headerFixedVisible');
      headerFixed.classList.add('headerFixedHidden');
      backToTop.classList.remove('btVisible');
      backToTop.classList.add('btHidden');
    }
  }
}
