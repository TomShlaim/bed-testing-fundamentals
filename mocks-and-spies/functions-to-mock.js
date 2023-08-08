const axios = require('axios');
function forEach (items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}
async function getGuru () {
  const guru = await axios.get('https://api.apis.guru/v2/list.json')
  return guru.data;
}
async function putGuru () {
  const guru = await axios.put('https://api.apis.guru/v2/list.json')
  return null;
}

module.exports = { forEach, getGuru, putGuru }
