var fs=require('fs')
//fs.mkdirSync('Sampledir')
//writeFileSync('.\\Sampledir\\samplefile.txt\\','sample file','utf8');
var op=fs.readFileSync('.\\WriteFile\\writefile.txt','write file','utf8');
console.log('write file done'+op);
