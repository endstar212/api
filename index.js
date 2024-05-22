const axios = require('axios');
const fs = require('fs');
let data = JSON.stringify({
  "prompt": "biomechanical style illustration beautiful woman, colorful melting human head. acrylic bubbles and flowers, ferrofluids, water distortions. looking up, intricate abstract. intricate artwork. beeple. blend of organic and mechanical elements, futuristic, cybernetic, detailed, intricate, dark theme, in awe:1.2, confident, surprised:0.7, natural skin, style of Stan Manoukian"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://ai.test/api/create-image',
  headers: { 
    'Authorization': '019ldkfgDjSCElbYVWSzZXqvTYWRtaW5AdGVzdC5jb21SVXlEUll1MmQ=', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
    let base64Image = response.data;
    let base64ImageString = base64Image.split(';base64,').pop();
    fs.writeFile('image.png', base64ImageString, {encoding: 'base64'}, function(err) {
      console.log('File created');
    });

})
.catch((error) => {
  console.log(error);
});
