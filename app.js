// window.onload = start(letters);
// window.onload = async function () {
//   start(letters);
// };

// const password = randomSentence(sentence);
//Game of Thrones quotes API

let shownPassword = "";
let failureCounter = 0;
const yes = new Audio("yes.wav");
const no = new Audio("no.wav");

const data = fetch("https://api.gameofthronesquotes.xyz/v1/random")
  .then((res) => res.json())
  .then((res) => {
    // console.log(res.sentence);
    const password = res.sentence;

    for (i = 0; i < password.length; i++) {
      if (password.charAt(i) == " ") {
        shownPassword = shownPassword + " ";
      } else if (password.charAt(i) == ",") {
        shownPassword = shownPassword + ",";
      } else if (password.charAt(i) == ".") {
        shownPassword = shownPassword + ".";
      } else if (password.charAt(i) == "'") {
        shownPassword = shownPassword + "'";
      } else if (password.charAt(i) == "?") {
        shownPassword = shownPassword + "?";
      } else if (password.charAt(i) == "!") {
        shownPassword = shownPassword + "!";
      } else {
        shownPassword = shownPassword + "-";
      }
    }

    start(letters, password.toUpperCase());
  });
