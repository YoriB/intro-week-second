const { check, runTest } = require("../../test-api");

const sounds = ["fizz", "buzz", "bang", "crash", "wallop"];
const exclaimedSounds = [];

// your loop here...
for (let i = 0; i < sounds.length; i++) {
  exclaimedSounds.push((sounds[i] + '!'))
}
console.log(exclaimedSounds)

runTest("check strings with added ! are pushed into exclaimedSounds", function () {
  check(exclaimedSounds).isEqualTo(["fizz!", "buzz!", "bang!", "crash!", "wallop!"]);
});
