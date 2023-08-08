function fetchData () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('some data');
    }, 3000);
  });
}

module.exports = { fetchData }
