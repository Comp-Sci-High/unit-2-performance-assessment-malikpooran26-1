const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc
console.log("Welcome to the superhero chat bot!!!!")
console.log("Pick a superhero by entering the specific ID list down below")
console.log("263: Flash", "470: Moon Knight", "490: NightCrawler", "213: Deadpool")
console.log("If you want other numbers follow this link: https://superheroapi.com/ids.html")

const choice = prompt("Enter in the code for the superhero you want to see");

console.log(`Fetching ${choice} images`);

const url = `https://superheroapi.com/api/${apiKey}/${choice}/image `

async function fetchHero() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.url)
}
fetchHero();