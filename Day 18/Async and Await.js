async function fetchData() {
    try {
      const response = await fetch('https://restcountries.com/v2/all' );
      if (!response.ok) {
        throw new Error('HTTP error, status: ' + response.status);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  