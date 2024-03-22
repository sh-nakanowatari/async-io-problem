'use strict';

const https = require('node:https');
const fs = require('node:fs');
let data = '';

https.get('https://www.nicovideo.jp/ranking/genre/all?term=hour&rss=2.0&lang=ja-jp',
  {
    headers: {
      'User-Agent': 'node',
    },
  },
  (response) => {
    response
      .on('data', (chunk) => {
        data += chunk;
      })
      .on('end', () => {
        
      });
  }
);

fs.writeFile('test.txt', data, 'utf8', () => {});