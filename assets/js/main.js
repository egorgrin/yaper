const header = document.querySelector('header');
const mobileNav = document.querySelector('.mobile_nav');
const burgerBtn = document.querySelector('.hamb');

burgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  let headerHeight = +header.getBoundingClientRect().height.toFixed(1);
  let mobileNavHeight = +mobileNav.scrollHeight.toFixed(1);

  mobileNav.style.borderTop = '3px solid #F29100';

  mobileNav.classList.toggle('opened');
  if (mobileNav.classList.contains('opened')) {
    mobileNav.style.maxHeight = `${mobileNavHeight}px`;
    mobileNav.style.transform = `translateY(${headerHeight}px)`;
  } else {
    mobileNav.style.maxHeight = '0px';
    mobileNav.style.transform = '0px';
    setTimeout(() => {
      mobileNav.style.borderTop = null;
    }, 500);
  }
};
