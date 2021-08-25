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