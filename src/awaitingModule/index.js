const awaitingModule = new Promise((resolve) => {
  setTimeout(() => resolve("Resolved"), 10000)
})

console.log("Will start to await");

const value = await awaitingModule;

console.log("Awaiting complete");


export default value;