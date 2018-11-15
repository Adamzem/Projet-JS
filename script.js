function lauchgame(){
document.getElementById('conteneur').style.display='none';
document.getElementById('conteneurj').style.display='block';

var start = document.getElementById('timer');                                    // Initialisation timer //
start.addEventListener('click', decompte, false);

var decompte = function(i) {
    document.getElementById('timer').innerHTML = i + "s" ;                      // Affichage //
}

var affichage = function() {
    console.log('aozjdaond');
    alert ("Vous avez perdu et le tueur vous a tué ...");                   // Défaite, si le décompte est fini //
        
    }

    var temp = 0;

    var decrement = function() {
        for (var i = 600; i > -1; i --) {
            setTimeout((function(s) {
                return function() {
                    decompte (s);
                }
            }) (i), temp);

            temp += 1000;
        }
    }
decrement();
}


var coupable=Math.floor((4-1)*Math.random()+1); 
console.log(coupable);

var personnages=[                                                                                                // Tableau des personnages, tentative de phrases aléatoires // 
    sonia=[
        "Sonia",
        document.getElementById('sonia').innerHTML='<img class="imgperso"id="sonia" src="sonia.png" alt="sonia"/>',
        '<div id="truc">SONIA:  Naaaah, Je ne suis pas la tueuse... Ne m\'accusez paaaas !</div>',
        "1"
    ],
    chinois=[
        "chinois",
        document.getElementById('chinois').innerHTML='<img class="imgperso"id="chinois"src="chinese.png" alt="chinois"/>',
        '<div id="truc">SECURITE :  Mon travail est d\'assurer la sécurité, pas de laisser des cadavres dans les locaux !</div>',
        "2"
    ],
    secu=[
        "secu",
        document.getElementById('securite').innerHTML='<img class="imgperso"id="securite"src="securite.png" alt="sécurité"/>',
        '<div id="truc">ETUDIANT :  Je suis là que pour travailler ! Je code moi, je ne tue pas .. </div>',
        "3"
    ],
    eleve=[
        "eleve",
        document.getElementById('eleve').innerHTML='<img class="imgperso"id="etudiant" src="etudiant.png" alt="etudiant"/>',
        '<div id="truc">CHINOIS : 我杀了狗而不是男人 </div>',
        "4"
    ]

];
console.log(personnages);

function parler(qp){
    console.log(qp);                                                                                                        // Texte personnages //
    document.getElementById('recherche').style.display='none';
    document.getElementById('dialogue').style.display='block';
    if(qp==1){
        document.getElementById('phrase').innerHTML=personnages[0][2];
    }else if(qp==2){
        document.getElementById('phrase').innerHTML=personnages[1][2];
    }else if(qp==3){
    document.getElementById('phrase').innerHTML=personnages[2][2];
    }else if(qp==4){
        document.getElementById('phrase').innerHTML=personnages[3][2];
    }
    function coupableoupas(){
        if(qp===coupable){
            alert('Vous avez trouvé le tueur ! Bravo à vous détective!!!')
        }else{
            alert('Vous avez Perdu, vous êtes nul');
        }
    }
    document.getElementById('accuseroui').addEventListener('click', coupableoupas ,false);
}

function continuer(){
    document.getElementById('dialogue').style.display='none';
}
function continuer2(){
    document.getElementById('recherche').style.display='none';
}
function prendreobjet(qo){
    document.getElementById('dialogue').style.display='none';
    console.log(qo);
    document.getElementById('recherche').style.display='block';
    if(qo==1){
        document.getElementById('recherchep').innerHTML='<div id="truc"> Ce couteau est taché de sang, sluurp il a l\'air d\'avoir servi récemment</div>';                          // Texte objets //  
    }else if(qo==2){
        document.getElementById('recherchep').innerHTML='<div id="truc"> CISEAUX ABIMES</div>';
    }else if(qo==3){
    document.getElementById('recherchep').innerHTML='<div id="truc"> L\'agent de sécurité ne devrait pas le quitter... ce poistolet ... est chaud ... mais pas trop ... </div>';
    }else if(qo==4){
        document.getElementById('recherchep').innerHTML='<div id="truc">Une fiole de poison ici ... c\'est quoi ce bordel </div>';
    }else if(qo==5){
        document.getElementById('recherchep').innerHTML='<div id="truc"> Sonia à récemment parler du fait qu\'elle avait un animal de compagnie hors-norme </div>';
    }else if(qo==6){
        document.getElementById('recherchep').innerHTML='<div id="truc"> Bah .. C\'est un stylo ... mais ... sans encre ...  </div>';
    }else if(qo==7){
        document.getElementById('recherchep').innerHTML='<div id="truc"> Joan s\'est toujours senti très ... ... effeminé à vrai dire </div>';
    }else if(qo==8){
        document.getElementById('recherchep').innerHTML='<div id="truc"> Corps inerte de Thomas... </div>';
    }

}

function synopsis(){
    var dd=document.getElementById('pseudo').value;
    document.getElementById('debut').innerHTML=('<div id="synops">Dans la nuit du 25 Octobre 2018, quelqu\'un à été assassiné : Thomas Bastide <br>Quatre personnes sont suspectées: Sonia Ameur, L\'agent de sécurité, un étudiant lambda, et Joan Kucukoglu.<br>Ce sont les seules personnes qui sont restées le plus tard dans les locaux, avec Thomas. <br>Pour résoudre cette enquête, et trouver le coupable, la police à fait appel au meilleur des détectives, VOUS ! <br>Detective '+dd+', nous comptons sur vous ! Faites de votre mieux.</div><div id="test"></div>');
    document.getElementById('lien').style.display='block';
    document.getElementById('lien').addEventListener('click', lauchgame ,false);                                                                        // Histoire // 
}
document.getElementById('bouton').addEventListener('click', synopsis,false);


