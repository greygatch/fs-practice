const fs = require('fs');
const path = require('path');
const tempDirectoryExists = fs.existsSync('./temp');

function handleError(err){
  if(err){
    return err;
  }
}

function makeTempDirAndUpdate(){
  const tempPath = path.resolve(__dirname, './temp');
  fs.mkdir(tempPath);
  console.log('Temp directory created.');
  updateConfigFile();
}

function updateConfigFile(){
  const configPath = path.resolve(__dirname, 'config.json');
  fs.readFile(configPath, (err, data) => {
    handleError(err)
    writeConfigCopy(data);
  });
}

function writeConfigCopy(data){
  const configOutputPath = path.resolve(__dirname, "./temp/config.json.example");
  fs.writeFile(configOutputPath, data.toString(), (err) => {
      handleError(err)
      console.log("The file was saved.");
  });
}


if (tempDirectoryExists) {
  updateConfigFile();
} else {
  makeTempDirAndUpdate();
}
