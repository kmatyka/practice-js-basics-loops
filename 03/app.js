const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !==x) {

    randomNumber = Math.round(Math.random() * 5);
    iteration = iteration + 1;
    console.log(randomNumber);
}

alert('Gratulacje! Udało Ci się za' + iteration + 'razem');