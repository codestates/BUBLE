const { user } = require('../models');
const fetch = require('node-fetch');

async function main() {
  const urlSource = 'https://source.unsplash.com/1600x900/?shoes';
  const resp = await fetch(urlSource);

  console.log(resp.url);
}
main();
