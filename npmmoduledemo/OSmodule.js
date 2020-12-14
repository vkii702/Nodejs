var os=require('os')
console.log('OS architecture'+os.arch());
console.log('OS loadaverage'+os.loadavg());
console.log('Network interface'+os.networkInterface());
consloe.log('platform'+os.platform());
console.log('release'+os.release());
console.log('Os Name'+os.type());
console.log('Default derectory for the temp file'+os.tempdir());
console.log('networkInterface'+os.networkInterface());
console.log('Total Memory'+os.Totalmem()/(1024*1024*8));
console.log('System uptime'+os.uptime()/(60*60));
console.log('password file entry'+os.userinfo(['Administrator']));