'use strict';

const https = require('node:https');
let data = '';

https.get('https://www.nicovideo.jp/ranking/genre/all?term=hour&rss=2.0&lang=ja-jp', (response) => {
  response
    .on('data', (chunk) => {
      data += chunk;
    })
    .on('end', () => {
    });
});

console.log(data);