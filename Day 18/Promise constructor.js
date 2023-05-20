const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        // Resolve the promise if the random number is less than 0.5
        resolve(randomNum);
      } else {
        // Reject the promise if the random number is greater than or equal to 0.5
        reject(new Error('Random number is too high'));
      }
    }, 2000);
  });
  
  // Handling the resolved promise
  myPromise.then(result => {
    console.log('Resolved:', result);
  }).catch(error => {
    console.error('Rejected:', error);
  });
  