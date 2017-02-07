const fs = require('fs');

fs.readFile('config.json', (err, data) => {
  if (err) { return err; }
  fs.writeFile("config.json.example", data.toString(), (err) => {
      if(err) { return err; }
      console.log("The file was saved.");
  });
});
