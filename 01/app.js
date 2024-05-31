const randomNumber = Math.round(Math.random() * 20);
if(randomNumber>5){
    let liczby = "";
    for(i=5;i<=randomNumber;i++){
        if(i+1>randomNumber){
            liczby += i+".";
        }else{
            liczby += i+",";
        }
    }
    console.log(liczby);
}else{
    console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}
