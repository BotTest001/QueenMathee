const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=uuRzASQK#tCkFhc7ohadjQAw2O2Egn0YCTOVKRVWXnXOu6ca0vEg",
MONGODB: process.env.MONGODB || "mongodb://mongo:XHVHnqUptVkdnPhgZyUExTisHaEfUSgL@autorack.proxy.rlwy.net:33494",
};
