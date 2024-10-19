function clickMenu() {
  if (nav.style.display == "block") {
    menu.style.display = "none";
    nav.style.display = "none";
    burguer.src = "./Assets/Img/Icons/menu-hamburguer.svg";
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    nav.style.display = "block";
    burguer.src = "./Assets/Img/Icons/menu-close.svg";
  }
}

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.accordion-icon');

  header.addEventListener('click', () => {
    item.classList.toggle('open');
    if (item.classList.contains('open')) {
      icon.innerHTML = '-';
    } else {
      icon.innerHTML = '+';
    }
  });
});