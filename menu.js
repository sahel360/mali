console.log("Le fichier JavaScript est bien chargé");

  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const dropdowns = document.querySelectorAll('.nav-links .dropdown');

  function isMobile() {
    return window.innerWidth <= 1024;
  }

  // Affichage du menu mobile
  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });

  // Fermer le menu si on clique en dehors
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('active') &&
      !navLinks.contains(e.target) &&
      e.target !== mobileMenu
    ) {
      navLinks.classList.remove('active');
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }
  });

  // Gérer le clic sur les dropdowns
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');

    link.addEventListener('click', (e) => {
      if (isMobile()) {
        e.preventDefault(); // bloque le lien sur mobile
        dropdown.classList.toggle('active'); // ouvre/ferme le sous-menu
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const images = document.querySelectorAll(".section-imgg");
    const texts = document.querySelectorAll(".texte-block");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.target;

        // Onglet actif
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Images
        images.forEach((img) => {
          img.classList.remove("active");
          if (img.dataset.image === target) {
            img.classList.add("active");
          }
        });

        // Textes
        texts.forEach((txt) => {
          txt.classList.remove("active");
          if (txt.id === target) {
            txt.classList.add("active");
          }
        });
      });
    });
  });

const scrollTopBtn = document.getElementById('scrollTop');
const scrollBottomBtn = document.getElementById('scrollBottom');
const scrollContainer = document.querySelector('.scroll-buttons');

let scrollTimeout;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;

  // Affiche selon position
  if (scrollY < 100) {
    scrollBottomBtn.style.display = 'block';
    scrollTopBtn.style.display = 'none';
  } else if (scrollY >= height - 100) {
    scrollTopBtn.style.display = 'block';
    scrollBottomBtn.style.display = 'none';
  } else {
    scrollTopBtn.style.display = 'block';
    scrollBottomBtn.style.display = 'block';
  }

  // Montre les boutons pendant le scroll
  scrollContainer.classList.add('scrolling');

  // Réinitialise le timeout
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollContainer.classList.remove('scrolling');
  }, 800); // Disparaît après 800ms sans scroll
});
