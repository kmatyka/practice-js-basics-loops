/*
W zadaniu #01 miałeś przykład, w jaki sposób wylosować liczbę z przedziału 
od 0 do 20. Teraz Twoim zadaniem będzie wylosowanie przy pomocy pętli while 
liczby przechowywanej w zmiennej x. Wartość dla zmiennej x może być dowolna 
z losowanego przedziału, czyli np. const x = 5.
W zmiennej iteration masz zbierać informacje o tym, ile razy musiała być 
wykonana pętla while, aby móc wylosować wartość przechowywaną w zmiennej x. 
Wartość zmiennej iteration wyświetl w konsoli po zakończeniu wykonywania 
pętli. Do przechowywania wylosowanej liczby możesz wykorzystać zmienną 
randomNumber.
Zanim zaczniesz rozwiązywać to zadanie, zastanów się, w którym miejscu 
będziesz losować liczbę oraz jaki powinien być warunek dla pętli while.
*/
const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 30)
    iteration++;
}
console.log('Liczba losowań: ' + iteration);