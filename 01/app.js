const checkNumber = (number)=>{
    if(number>5){
        for (let i = 5; i <=number ; i++) {
            console.log(i)
        }
    }else{
        console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
    }
}

const randomNumber = Math.round(Math.random() * 20);
checkNumber(randomNumber)
