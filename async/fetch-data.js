const axios = require('axios');
function fetchData () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('some data');
    }, 3000);
  });
}
async function fetchWithAxios(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response);
      }
      catch (error){
    console.log(error)
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos/1');
  }
}

module.exports = { fetchData, fetchWithAxios }
