var coupable=Math.floor((4-1)*Math.random()+1); 
console.log(coupable);
var personnages=[ 
    sonia=[
        "Sonia",
        document.getElementById('sonia').innerHTML='<img class="imgperso"id="sonia" src="sonia.png" alt="sonia"/>',
        '<div id="truc">SONIA:  Naaaah, Je ne suis pas la tueuse... Ne m\'accusez paaaas !</div>',
        "1"
    ],
    chinois=[
        "chinois",
        document.getElementById('chinois').innerHTML='<img class="imgperso"id="chinois"src="chinese.png" alt="chinois"/>',
        '<div id="truc">SECURITE :  Mon travail est d\'assurer la sécurité pas de laisser des cadavres dans les locaux !</div>',
        "2"
    ],
    secu=[
        "secu",
        document.getElementById('securite').innerHTML='<img class="imgperso"id="securite"src="securite.png" alt="sécurité"/>',
        '<div id="truc">ETUDIANT :  Je suis là que pour travailler, je code moi je tue pas .. </div>',
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
    console.log(qp);
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
            console.log('Vous avez trouver le tueur ! Bravo à VOUS !')
        }else{
            console.log('Vous avez Perdu, vous êtes nul');
        }
    }
    document.getElementById('accuseroui').addEventListener('click', coupableoupas ,false);
}

function continuer(){
    document.getElementById('dialogue').style.display='none';
}

function prendreobjet(qo){
    console.log(qo);
    document.getElementById('dialogue').style.display='block';
    document.getElementById('accuseroui').style.display='none';
    document.getElementById('accusenon').style.display='none';
    if(qo==1){
        document.getElementById('phrase').innerHTML='<div id="truc"> Ce couteau est taché de sang, sluurp il a l\'air d\'avoir servi récemment</div>';
    }else if(qo==2){
        document.getElementById('phrase').innerHTML='<div id="truc"> CISEAUX ABIMES</div>';
    }else if(qo==3){
    document.getElementById('phrase').innerHTML='<div id="truc"> L\'agent de sécurité ne devrait pas le quitter... ce poistolet ... est chaud ... mais pas trop ... </div>';
    }else if(qo==4){
        document.getElementById('phrase').innerHTML='<div id="truc">Une fiole de poison ici ... c\'est quoi ce bordel </div>';
    }else if(qo==5){
        document.getElementById('phrase').innerHTML='<div id="truc"> Sonia a récemment parler du fait qu\'elle avait un animal de compagnie hors-norme </div>';
    }else if(qo==6){
        document.getElementById('phrase').innerHTML='<div id="truc"> Bah .. C\'est un stylo ... mais ... sans encre ...  </div>';
    }else if(qo==7){
        document.getElementById('phrase').innerHTML='<div id="truc"> Joan s\'est toujours senti très ... ... effeminé à vrai dire </div>';
    }
}