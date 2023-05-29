function openMenu(element) {
  element.classList.toggle("change");
  const dropDownMenu = document.querySelector(".dropdown-container");
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
}
