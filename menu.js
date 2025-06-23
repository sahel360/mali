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

  // Gère l'affichage des boutons selon la position
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Position verticale
    const height = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY < 100) {
      // Tout en haut => afficher seulement le bouton Bas
      scrollBottomBtn.style.display = 'block';
      scrollTopBtn.style.display = 'none';
    } else if (scrollY >= height - 100) {
      // Tout en bas => afficher seulement le bouton Haut
      scrollTopBtn.style.display = 'block';
      scrollBottomBtn.style.display = 'none';
    } else {
      // En milieu de page => cacher les deux ou afficher les deux
      scrollTopBtn.style.display = 'block';
      scrollBottomBtn.style.display = 'block';
    }
  });

  // Actions au clic
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  scrollBottomBtn.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.toggle-button').forEach(button => {
      button.addEventListener('click', function () {
        const block = this.closest('.texte-block');
        const details = block.querySelector('.full-details');

        details.classList.toggle('show');
        this.textContent = details.classList.contains('show') ? 'Réduire' : 'Lire plus';
      });
    });
  });
