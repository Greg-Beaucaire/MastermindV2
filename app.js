// //Creation de la reponse.
let arrayLettres = ['1', '2', '3', '4', '5', '6', '7', '8'];

let reponse = [];
for(let i = 0; i < 5; i++){
    reponse[i] = arrayLettres[Math.floor((Math.random() * 8) + 0)];
}
console.log(reponse);
let correction = [];
let tour = 0;

document.getElementById("btn").addEventListener("click", function(){
    let proposition = document.querySelector("#proposition").value;

    for(let i = 0; i < 5; i++){
        if(reponse.includes(proposition[i])){
            if(proposition[i] == reponse[i]){
                correction[i] = 'Vert';
            } else{
                correction[i] = 'Orange';
            }
        } else if(!reponse.includes(proposition[i])){
            correction[i] = 'Rouge';
        }
    }

    tour = tour + 1;

    if(correction[0] == 'Vert' && correction[1] == 'Vert' && correction[2] == 'Vert' && correction[3] == 'Vert' && correction[4] == 'Vert'){
        document.getElementById("divReponse").innerHTML = 'Vous avez gagné en ' + tour + ' tour(s) !';
        return;
    }
    
    document.getElementById("divReponse").innerHTML = 'Votre proposition précédente :' + '\r\n<b>' + proposition + '</b>\r\n' + correction[0] + ',' + correction[1] + ',' + correction[2] + ',' + correction[3] + ',' + correction[4];
});
