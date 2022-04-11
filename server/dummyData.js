const { Item } = require('./models/index');
const fetch = require('node-fetch');
//fav_brand : brand별로 30개

console.log(Item);

async function createItem(n) {
  const brands = [
    '나이키',
    '조던',
    '아디다스',
    '르꼬끄',
    '데상트',
    '마르지엘라',
    '컨버스',
    '반스',
    '닥터마틴',
    '디스커버리',
  ];
  const grades = ['S', 'A', 'B', 'C'];

  const oneFigureNum = getRandomArbitrary(1, 10);
  const twoFigureNum = Math.floor(Math.random() * 100);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const brand = brands[n]; //brand별로 30개를 만들어야 : 0~9까지 30번씩 호출
  const itemName = brand + String(oneFigureNum * 1000);
  const buyPrice = twoFigureNum * 10000;
  const sellPrice = twoFigureNum * 10000 + oneFigureNum * 10000;
  //   const img = shoeImg.url;
  const size = getRandomArbitrary(22, 29) * 10;
  const grade = grades[getRandomArbitrary(0, 4)];
  const quantity = twoFigureNum;

  let res = await fetch('https://source.unsplash.com/featured/?shoe');
  //이미지 가져오는 거 기다리는 용

  //   let createdItem = {
  //     itemName: itemName,
  //     brand: brand,
  //     buyPrice: buyPrice,
  //     sellPrice: sellPrice,
  //     img: res.url,
  //     size: size,
  //     grade: grade,
  //     quantity: quantity,
  //   };

  Item.create({
    itemName: itemName,
    brand: brand,
    buyPrice: buyPrice,
    sellPrice: sellPrice,
    img: res.url,
    size: size,
    grade: grade,
    quantity: quantity,
  });
}

async function dummyData() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 30; j++) {
      await createItem(i);
      //이미지를 기다리는 시간이 다 다르기 때문에 다 기다리고 다음 순서로 넘어가기 위함
    }
  }
}

dummyData();

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 1; i++) {
//     createItem(i);
//   }
// }
