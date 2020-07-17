const faker = require("faker/locale/en");
const fs = require("fs");
const path = require("path");
const uid = require("uid");
const num_of_items = 11;

const images = [
  "/images/images_1.png",
  "/images/images_2.png",
  "/images/images_3.png",
  "/images/images_4.png",
  "/images/images_5.png",
  "/images/images_6.png",
  "/images/images_7.png",
  "/images/images_8.png",
  "/images/images_9.png",
  "/images/images_10.png",
  "/images/images_11.png",
];

let items = [];
let cacheValue, cache;
const randomValue = (array) => {
  if (!cache || cache.length === 0) {
    cache = [...array];
  }

  const len = Math.floor(Math.random() * cache.length);
  const item = cache[len];

  if (cacheValue === item) {
    return randomValue(cache);
  }
  // remove item from
  cacheValue = item;
  cache.splice(len, 1);

  return item;
};

for (let i = 0; i < num_of_items; i++) {
  items.push({
    id: uid(16),
    image: randomValue(images),
    title: faker.name.findName(),
    description: faker.lorem.paragraphs(2),
  });
}

console.log(items);

// // move obj to a string
const json = JSON.stringify({ items }, null, 2);
// // get db.json path
const filePath = `${path.dirname(__filename)}/db.json`;

// // save string to a file
fs.writeFile(filePath, json, (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("====> mock data generated.");
  }
});
