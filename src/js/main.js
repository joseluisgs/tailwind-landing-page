// Tu código JS

// BACK TO TOP Init
addBackToTop({
  diameter: 56,
  backgroundColor: '#2563EB',
  textColor: '#F3F4F6'
});

// TRANSICIONES
// en todos los href le apliacmos el estilo smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// TEMA

function initTheme() {
  // Existe ya un tema en store?
  const cachedTheme = localStorage.theme ? localStorage.theme : false;
  // tenemos un tema en el sistema operativo o explorador
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (cachedTheme) setTheme(cachedTheme);
  else if (userPrefersDark) setTheme('dark');
  else setTheme('light');
  console.log('Store init Theme', currentTheme);
};

function setTheme(newTheme) {
  currentTheme = newTheme;
  console.log(`Store set Theme to: ${newTheme}`);
  localStorage.setItem('theme', newTheme);
  if (currentTheme === 'light') {
    document.querySelector('html').classList.remove('dark');
    document.querySelector('#theme-switch').style.color = 'rgba(252, 211, 77, 1)';
  } else {
    document.querySelector('html').classList.add('dark');
    document.querySelector('#theme-switch').style.color = 'rgba(200, 200, 250, 1)';
  }
};

function changeTheme() {
  if (currentTheme === 'light') setTheme('dark');
  else setTheme('light');
};

// NAVBAR PLUGIN
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});