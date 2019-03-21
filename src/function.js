// Exercise 4.1
// Create a function named calcSurface that takes the length and width of a rectangle and 
// returns its surface. Then create a program that asks the length and width of a 
// rectangle to the user then displays the surface of that rectangle. That program must use the function you 
// created.

// Ok we maken een functie aan die calcSurface heeft en die twee argumenten kan aanvaarden.

// const calcSurface = function(argument1, argument2){
//wat de functie moet doen
// }

// De functie moet de oppervlakte van de rechthoek teruggeven. 
// De oppervlakte van een rechthoek berekenen we door de lengte te vermenigvuldigen met de breedte.

const calcSurface = function(lengte,breedte){
    let oppervlakte = lengte * breedte;
    return oppervlakte
}

// Ok we vragen de gebruiker om een lengte en een breedte te geven.
// We zullen vervolgens mbv deze functie de oppervlakte van de gebruiker zijn rechthoek berekenen.
// We maken 2 variabelen aan, 1 voor de lengte en 1 voor de breedte, die de gebruiker opgeeft.
let inputLengte = null;
let inputBreedte = null;

//We gaan de waarde van deze gemaakte variabelen instellen op mbv de volgende functies.
// Deze zal de gebruiker prompten/vragen naar de lengte en breedte van de rechthoek.

const getLength = function(){
    inputLengte = prompt("Wat is de lengte van de rechthoek?");
}

const getWidth = function(){
    inputBreedte = prompt("Wat is de breedte van de rechthoek?")
}

//Hierboven hebben we de functies gedefineerd maar nog niet opgeroepen. Ze bestaan dus wel maar ze worden nog niet gebruikt.
//Hieronder roepen we beide functies op. We vragen dus de gebruiker om een lengte en een breedte in te geven en slaan deze informatie op
// in inputLengte en inputBreedte. 

getLength();
getWidth();

//Tot slot roepen we de functie die de oppervlakte zal berekenen op. Deze functie dient 2 argumenten te krijgen, een lengte en breedte.
//We roepen de functie op met de 2 parameters die de net door de gebruiker gedefinieerd zijn.

calcSurface(inputLengte,inputBreedte)
