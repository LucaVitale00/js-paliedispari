/*L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
e dichiariamo chi ha vinto. */

//Creo le varie variabili
var cpu1, cpu2;
var risultato = document.getElementById("mio_id");

//Creo la function per il math random
function numberRandom() {
    return Math.floor(Math.random() * 5 +1); 
}

//Computer 1 e 2 scelta numero random da 1 a 5
cpu1 = numberRandom();
var numerocpu1 = document.getElementById("cpu1").innerHTML = "Cpu1 ha scelto: " + cpu1;
console.log(cpu1);
//
cpu2 = numberRandom();
var numerocpu1 = document.getElementById("cpu2").innerHTML = "Cpu2 ha scelto: " + cpu2;
console.log(cpu2);

//Creo una function per verificare il vincitore
function winner(number) {
    if (cpu1 > cpu2) {
        return "cpu1 ha vinto!"
    } else if (cpu1 < cpu2) {
        return "cpu2 ha vinto!"
    } else if (cpu1 == cpu2) {
        return "Pareggio!"
    }
}
//Dichiaro il vincitore
risultato.innerHTML = winner(cpu1,cpu2);


