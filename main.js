boutonoui.addEventListener('click', () => {
  alert ("Bon choix, appuyez sur le bouton GO")
})
// une animation qui envoie un message d'alerte en haut de la page

boutonnon.addEventListener('click', () => {
  alert ("Mauvais choix, retentez votre chance")
})

boutongo.addEventListener('click', () =>{
  confirm("Souhaitez-vous regarder un épisode des Bratz ?")
})
// une animation qui envoie un message d'alerte en haut de la page en proposant une confirmation (soit ok soit annuler)


setInterval (() => {
  yasmin.classList.add("flash");
  yasmin.addEventListener('animationend', () => {
      yasmin.classList.remove("flash")
  })
  }, 5000);
// une animation pour faire apparaitre l'image comme un flash toutes les 5 secondes


setInterval (() => {
  jade.classList.add("flash");
  jade.addEventListener('animationend', () => {
    jade.classList.remove("flash")
  })
  }, 5000);
// une animation pour faire apparaitre l'image comme un flash toutes les 5 secondes

setInterval (() => {
bratzz.classList.add("zoomIn");
bratzz.addEventListener('animationend', () => {
  bratzz.classList.remove("zoomIn")
})
}, 2000);
// une animation pour faire apparaitre l'image comme un zoom toutes les 2 secondes


const titre = Bienvenue.innerHTML
Bienvenue.innerHTML = ('Bienvenue sur Bratz Fandom <3')
// une façon de remplacer le titre en html par celui qui est écrit juste ici en javascript

yasmin.addEventListener('mouseover', () =>{
  document.getElementById("yasmin").style.transform = "rotate(90deg)";
})

jade.addEventListener('mouseover', () =>{
  document.getElementById("jade").style.transform = "rotate(-90deg)";
})