const nav = document.querySelector('.nav__menu');
const btn = document.querySelector('.hamburger');
const darkModeToggle = document.querySelector('.toggler');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach((item) =>
  item.addEventListener('click', () => {
    btn.classList.remove('active');
    nav.classList.remove('active');
  })
);

darkModeToggle.addEventListener('click', () => {
  document.querySelector('.ball').classList.toggle('ballDark');
  document.body.classList.toggle('dark');
});
