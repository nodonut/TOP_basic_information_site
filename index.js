const http = require('http');
const url = require('url');
const fs = require('fs');

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = '.' + q.pathname;

    function readAndPrint(page) {
      fs.readFile(page, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }

    switch (filename) {
      case './':
        readAndPrint('index.html');
        break;
      case './about':
        readAndPrint('about.html');
        break;
      case './contact-me':
        readAndPrint('contact-me.html');
        break;
      default:
        readAndPrint('404.html');
        break;
    }
  })
  .listen(3000);
