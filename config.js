const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3rADAZqR#b1NiFj3va2Cj4keMC6gnb4tR7qoROwRSxLay95IuKH0",
MONGODB: process.env.MONGODB || "mongodb://mongo:XHVHnqUptVkdnPhgZyUExTisHaEfUSgL@autorack.proxy.rlwy.net:33494",
};
