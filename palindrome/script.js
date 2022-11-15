//Una funzione per capire se la parola è palindroma

//Dichiaro le variabili
var utente;
var risultato = document.getElementById("mio_id");
//Chiedo all'utente una parola
utente = prompt("Digita una parola e ti dirò se è palindroma!")
//Creo una funzione che stabilista se la parola sia palindroma
function palindrome(word) {
    var ln = word.length;
    for (var i = 0; i <= ln / 2;)
        if (word[i++] !== word[ln - i]) return false;
    return true
}

//Verifico che la parola sia palindroma o meno

risultato.innerHTML = (palindrome(utente));