const menuBtn = document.getElementById('menuImg');
let navBar = document.getElementById('navBar')

menuBtn.addEventListener('click', () => {
  if(navBar.classList.contains('hidden') === false) {
    navBar.classList.add('hidden');
  } else {
    navBar.classList.remove('hidden');
  }
})