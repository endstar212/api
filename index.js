const axios = require('axios');
const fs = require('fs');
const express = require('express');


const app = express()
const port = 3000

app.get('/', (req, res) => {
  let data = JSON.stringify({
    "prompt": "uçan araba"
  });
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://httpbin.org/get',
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    res.send(response.data.url)
  })
  .catch((error) => {
    res.send(error)
  });
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



