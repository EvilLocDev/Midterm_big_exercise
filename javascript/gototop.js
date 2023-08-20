// Nút go to top
const goToTopBtn = document.getElementById('goToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goToTopBtn.classList.add('show');
  } else {
    goToTopBtn.classList.remove('show');
  }
});

goToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});