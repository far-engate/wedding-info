/* js/mobile-menu.js */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle   = document.getElementById('menuToggle');
  const mobileMenu   = document.getElementById('mobileMenu');
  const closeBtn     = mobileMenu.querySelector('.close-menu');
  const menuLinks    = mobileMenu.querySelectorAll('a');

  const openMenu  = () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', openMenu);
  closeBtn  .addEventListener('click', closeMenu);
  menuLinks .forEach(link => link.addEventListener('click', closeMenu));
});
