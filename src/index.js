import awaitingModule from './awaitingModule'
import normalModule from './normalModule';
import qs from 'qs';

console.log(awaitingModule);
console.log("Hello from index.js")
console.log(normalModule);

const queryObj = qs.parse(window.location.search, { ignoreQueryPrefix: true });

const selectedLanguage = queryObj.language || 'english';

document.getElementById("fetch-button").addEventListener("click", function(event) {
  console.log("Clicked button");
});

const greetings = await import(`./languageData/${selectedLanguage}.js`);
document.getElementById("greetings").innerText=greetings.default;
console.log("Language file loaded");
