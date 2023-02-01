const x = 10;
let iteration = 0;
let randomNumber = -1;



while(randomNumber !== x){
    
    //console.log( "liczba " + randomNumber + " losuj dalej to nie ta liczba. Próbuj dalej!")
    iteration = iteration + 1;
    randomNumber = Math.round(Math.random() * 10);
 
    
}
iteration = iteration + 1;
console.log("Brawo! liczba " + x + " to właściwa liczba. Wylosowałeś ją za " + iteration + " razem") 