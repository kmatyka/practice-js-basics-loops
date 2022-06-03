const randomNumber = Math.round(Math.random() * 20);

if (randomNumber > 5) {
      for (let i = 5; i <= randomNumber; i = i + 1) {
            console.log(i);
      }

} else{
      console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli')
}
