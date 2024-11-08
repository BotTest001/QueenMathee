const { fetchJson } = require('../lib/functions');
const config = require('../config');
const { cmd, commands } = require('../command');

let dt = `*_QUEEN MATHEE MOVIE SEARCH 🔎_*\n\n`
let cap = `\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

cmd({
    pattern: "mvsearch",
    desc: "search movies",
    category: "search",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, reply }) => {
    try {
        // Check if the user provided a movie name (query)
        if(!q) return reply("*_Please give me a movie name._*");

        // Properly format the fetchJson URL request
        const mv = await fetchJson(`https://dark-yasiya-api-new.vercel.app/movie/sinhalasub/search?text=${q}`);

        // Assuming mv.result.data is an array
        const array = mv.result.data;
        
 if (!array || array.length === 0) {
            return reply("*_Can't find this movie._*");
        }
        // Loop through the array and log the movie titles and links
        
            
const result = array.map((movie, index) => `${index + 1}. *Movie Name :* ${array[index].title}\n*Link :* ${array[index].link}`).join("\n\n");
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})
            

    } catch(e) {
        // Log any errors that occur during the fetch or processing
        console.log(e)
        reply(`${e}`)
    }
})

