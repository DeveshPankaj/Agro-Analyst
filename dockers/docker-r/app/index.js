const express = require('express')
const {spawn} = require('child_process')


const app = express()

app.get('/', (req, res) => {
  const ls = spawn('Rscript', ['/home/app/script.R']);

  let d = undefined;
  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    d = data.toString();
  });

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.json({error: null, data: { msg: d }})
  });
});

const server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('R server listening at http://%s:%s', host, port);
})
