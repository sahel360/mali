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
let isHovering = false;

// Empêche de disparaître quand on survole les boutons
scrollContainer.addEventListener('mouseenter', () => {
  isHovering = true;
  clearTimeout(scrollTimeout);
  scrollContainer.classList.add('scrolling');
});

scrollContainer.addEventListener('mouseleave', () => {
  isHovering = false;
  startHideTimeout();
});

function startHideTimeout() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    if (!isHovering) {
      scrollContainer.classList.remove('scrolling');
    }
  }, 800);
}

// Gère l'apparition selon le scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;

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

  scrollContainer.classList.add('scrolling');
  startHideTimeout();
});

// Ajoute le comportement au clic
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollBottomBtn.addEventListener('click', () => {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
});
