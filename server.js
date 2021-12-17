let fs = require('fs');


exports.randomWord = function(){
    //on lit le fichier texte et on récupère le contenu
    const dictionnaire = fs.readFileSync('./randomWords.txt','utf-8', function(err,data){
        if (err) throw err;
        return data;    
    });
    const listeMots = dictionnaire.toLowerCase().split(',');
    let nombreDeMots = listeMots.length;
    let nombreAleatoire = Math.floor(Math.random() * nombreDeMots);
    let motAleatoire = listeMots[nombreAleatoire];
    return motAleatoire;
}