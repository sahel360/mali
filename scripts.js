console.log("Le fichier JavaScript est bien chargé");


        function toggleMenu() {
            var sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('active');
        }

        document.addEventListener('DOMContentLoaded', function() {
            const sidebar = document.getElementById('sidebar');

            // Fermer la barre latérale lorsque la souris quitte la zone de la barre latérale
            sidebar.addEventListener('mouseleave', function() {
                sidebar.classList.remove('active');
            });

            // Optionnel : Fermer la barre latérale lorsqu'un lien est cliqué
            sidebar.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    sidebar.classList.remove('active');
                });
            });
        });