const checkPrimeNumber = (number) => {
  let isPrime = true;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      isPrime = false;
    }
  }

  return isPrime;
};

console.log(checkPrimeNumber(40));
