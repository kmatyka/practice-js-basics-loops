const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if (randomNumber > 5) {
  // Tutaj nie byłem pewien czy powinno być włącznie do wylosowanej liczby czy nie.
  // Jeśli tak, to powinno być <= zamiast < w warunku for
  for (let i = 5; i < randomNumber; i++) {
    console.log(i);
  }
} else {
  console.log('Wylosowana liczba jest zbyt mała aby użyć pętli');
}
