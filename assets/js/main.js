const header = document.querySelector('header');
const mobileNav = document.querySelector('.mobile_nav');
const mobileNavBody = document.querySelector('.mobile_nav_body');
const burgerBtn = document.querySelector('.hamb');

burgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  let headerHeight = +header.getBoundingClientRect().height.toFixed(1);
  let mobileNavHeight = +mobileNav.scrollHeight.toFixed(1);

  mobileNav.style.borderTop = '3px solid #F29100';

  mobileNav.classList.toggle('opened');
  if (mobileNav.classList.contains('opened')) {
    mobileNav.style.maxHeight = `${mobileNavHeight}px`;
    mobileNav.style.transform = `translate(-50%, ${headerHeight}px)`;
    mobileNavBody.style.transform = `translateY(0)`;

  } else {
    mobileNavBody.style.transform = `translateY(-25%)`;

    mobileNav.style.maxHeight = '0px';
    mobileNav.style.transform = '0px';
    setTimeout(() => {
      mobileNav.style.borderTop = null;
    }, 500);
  }
};
