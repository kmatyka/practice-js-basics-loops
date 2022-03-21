const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);


if (randomNumber > 5) {
    for (i = 5; i < randomNumber+1; i++){
      console.log(i);
    }
} else {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}
















// Twoim zadaniem jest napisać program, który będzie sprawdzał, czy wylosowana liczba jest większa od 5:
//     -Jeśli tak, to należy wykorzystać pętle `for`, aby wyświetlić w konsoli wszystkie liczby od 5 do wylosowanej wartości.Jeśli więc program wylosuje liczbę 10, to w konsoli powinniśmy wyświetlić liczby: 5, 6, 7, 8, 9, 10. -
//         Jeśli nie, to w konsoli należy wyświetlić informację: "Wylosowana liczba jest zbyt mała, aby użyć pętli".

//     Zwróć uwagę na konstrukcję dwóch powyższych zdań: "Jeśli prawda, to zrób to; jeśli fałsz, to zrób coś innego".Oba jednoznacznie wskazują na to, że oprócz samej pętli `for`, należy w tym zadaniu wykorzystać również instrukcję warunkową `if`.