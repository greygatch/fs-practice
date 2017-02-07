const fs = require('fs');
const path = require('path');

function handleError(err){
  if(err){
    return err;
  }
}

function makeTempDir(){
  fs.mkdir(path.resolve(__dirname, './temp'), function(err){
    handleError(err);
    console.log("Directory created successfully!");
    readConfigFile();
  });
}

function readConfigFile(){
  fs.readFile(path.resolve(__dirname, 'config.json'), (err, data) => {
    handleError(err)
    writeConfigCopy(data);
  });
}

function writeConfigCopy(data){
  fs.writeFile(path.resolve(__dirname, "./temp/config.json.example"), data.toString(), (err) => {
      handleError(err)
      console.log("The file was saved.");
  });
}


const tempDirectoryExists = fs.existsSync('./temp');
if (tempDirectoryExists) {
  readConfigFile();
} else {
  makeTempDir();
}
