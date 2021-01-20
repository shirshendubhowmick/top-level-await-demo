const awaitingModule = new Promise((resolve) => {
  setTimeout(() => resolve("Resolved"), 10000)
})

const value = await awaitingModule;

console.log("Test");

export default value;