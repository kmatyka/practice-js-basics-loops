// deklaracja funkcji
// z dwoma parametrami tj. a i b
function sum(a, b) {
    const result = a + b;
    // console.log(result)
    // zamiast wyświetlać zwróć wartość
    return result;
}
// wywołanie funkcji z różnymi parametrami
// i przypisaniem wyniku do zmiennej
const res1 = sum(4, 5); // 9
const res2 = sum(11, 44); // 55
console.log(res1, res2);
