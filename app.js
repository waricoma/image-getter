const exec = require('child_process').exec;
const imageGetter = function(url, extension, start, stop){
  for(let i=start;i<=stop;i++) exec(`wget ${url}/${i}.${extension}`);
};
