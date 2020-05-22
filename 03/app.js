const x = 10;
let iteration = 0;
let randomNumber = -1;

while(iteration <= x)
{
    randomNumber = Math.round(Math.random() * 15);
    if(randomNumber === x)
    {
        console.log(iteration)
    }
    //else{
       // console.log('o')
   // }
    //console.log(randomNumber)
    iteration++;
}

