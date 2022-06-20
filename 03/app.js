let iteration = 1;
const x = 5;
const randomNumber = Math.round(Math.random() * 20);

while (x !== randomNumber) {
  const randomNumber = Math.round(Math.random() * 20);
  if (x === randomNumber) {
    console.log(`Wylosowałeś liczbę ${x} za ${iteration} razem`);
    break;
  }
  iteration++;
}