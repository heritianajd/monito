let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    body.classList.toggle('open');
})


document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
    // Ajouter un écouteur d'événement sur l'événement "clic" de ces éléments
    toggle.addEventListener('click', e => {
      //obtenir l'ID de la barre latérale à partir de l'attribut de données de l'élément actuel
      const sidebarID = toggle.dataset.toggleSidebar;
      // vérifier s'il y a un élément sur la doc avec l'identifiant
      const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
      // s'il y a une barre latérale avec l'identifiant transmis (data-toggle-sidebar)
      if (sidebarElement) {
         // basculer l'état caché de l'aria de la barre latérale donnée
         let sidebarState = sidebarElement.getAttribute('aria-hidden');
         sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true); 
      }
    });
});

