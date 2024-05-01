'use strict';

const https = require('node:https');
const fs = require('node:fs');

function getContent(url) {
  return new Promise((resolve, reject) => {
    let data = '';
    https.get(url, (response) => {
      response
        .on('data', (chunk) => {
          data += chunk;
        })
        .on('end', () => {
          resolve(data);
        });
    })
  });
}

function save(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf8', () => {
      resolve('success!');
    });
  });
}

async function main() {
  const url = 'https://www.nicovideo.jp/ranking/genre/all?term=hour&rss=2.0&lang=ja-jp';
  const path = 'test.txt';
  const content = await getContent(url);
  fs.writeFileSync(path, content, 'utf-8');
  console.log('success!');
}

main();