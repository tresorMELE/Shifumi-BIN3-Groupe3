import React from 'react'


// const pierrebtn = document.getElementById('pierre');
// const feuillebtn = document.getElementById('feuille');
// const ciseauxbtn = document.getElementById('ciseaux');
// const affichage = document.getElementById('resultat');

// let joueur = null;
// let robot = null;
// let resultat = null;

// const robotChoix =['pierre', 'feuille', 'ciseaux'];

// function combat(j, o){
//   if(j==='pierre'&& o=== 'ciseaux'){
//     resultat = 'Gagné';
//     console.log(robot);
//     affichage.innerHTML = `${joueur}VS ${robot} : ${resultat}`;
//   }
// }

// pierrebtn.addEventListener('click',function(){
//   joueur = 'pierre',
//   chiffre = Math.floor(Math.random() =3);
//   robot = robotChoix[chiffre];
//   combat(joueur, robot);
// })

const buttons = document.querySelectorAll("button");
// const resultat = document.querySelector(".resultat");

function Gaming(Joueur, robot){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
          const joueur = buttons[i].innerHTML;
          const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
          let resultat = "";
          // resultat.innerHTML = joueur + "       " + robot;
          if (joueur===robot) {
            resultat = "Egalité";
          }
          else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles") && (robot === "Pierre")) {
            resultat = "Gagné";
          }
          else {
            resultat = "Perdu";
          }
        document.querySelector(".resultat").innerHTML = `
        Joueur : ${joueur} </br>
        Robot : ${robot} <br/>
        Résultat : ${resultat}
      `  ;
          
        });
        
        
      }
}



export default Gaming;