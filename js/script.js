// output lista cognomi in html
var outputLista = document.getElementById('lista');


// array lista cognomi
var cognomiList = ['Rossi' , 'Diaz' , 'Verdi' , 'Balsano' , 'Duzioni'];


// chiedo all'utente il suo cognome
// inserisco il cognome digitato nell'array
// ne ricavo un ulteriore variabile che userò successivamente
var input = prompt('Digita il tuo cognome...');
cognomiList.push (input)

cognomiList.sort(); // ordino alfabeticamente i cognomi dopo l'input


// creo una variabile al momento vuota.
var contenutoPrecedente;


// Inizio un ciclo per percorrere la lista e stamparla in ordine alfabetico
for (var i = 0; i < cognomiList.length; i++) {
  contenutoPrecedente = outputLista.innerHTML;
  outputLista.innerHTML = contenutoPrecedente + '<li>' + cognomiList[i];
};


// stampo la posizione del nuovo cognome inserito in var input
 var inputPosition = cognomiList.indexOf(input);
 document.getElementById('posizione').innerHTML = inputPosition;
