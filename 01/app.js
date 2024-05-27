const randomNumber = Math.round(Math.random() * 20);

const errorMsg = 'Wylosowana liczba jest zbyt mała, aby użyć pętli';

const logNumbers = () => {
	if (randomNumber >= 5) {
		for (let i = 5; i <= randomNumber; i++) {
			console.log(i)
		}
	} else throw new Error(errorMsg);
}

try {
	logNumbers()
} catch (error) {
	console.error(error.message)
}

