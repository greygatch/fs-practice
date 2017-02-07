const fs = require("fs");

fs.readFile('config.json', (err, data) => {
  if(err) {
    return console.error(err)
  }
  const parsedData = JSON.parse(data.toString());
  console.log(`Hello, ${parsedData.hello}.`);
});
