function randomSentence(arr) {
  const rand = Math.floor(Math.random() * (arr.length - 1) + 1);
  return arr[rand].toUpperCase();
}

String.prototype.setChar = function (place, char) {
  if (place > this.length - 1) {
    return this.toString();
  } else return this.substr(0, place) + char + this.substr(place + 1);
};

function start(letterChar, password) {
  const letters = document.getElementById("letters");

  for (i = 0; i < letterChar.length; i++) {
    const letter = document.createElement("div");
    letter.classList.add("letter");
    letter.id = `lett${i}`;
    letter.innerHTML = letterChar[i];
    letters.appendChild(letter);

    letter.addEventListener("click", (e) => {
      check(e.target.id.substr(4), password);
    });

    if ((i + 1) % 7 == 0) {
      const clearBoth = document.createElement("div");
      clearBoth.style.clear = "both";
      letters.appendChild(clearBoth);
    }
  }

  showPassword();
}

function check(nr, password) {
  let hit = false;

  for (i = 0; i < password.length; i++) {
    if (password.charAt(i) == letters[nr]) {
      shownPassword = shownPassword.setChar(i, letters[nr]);
      hit = true;
    }
  }

  if (hit == true) {
    yes.play();
    const element = "lett" + nr;
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00c000";
    document.getElementById(element).style.border = "3px solid #00c000";
    document.getElementById(element).style.cursor = "default";
    showPassword();
  } else {
    no.play();
    const element = "lett" + nr;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#c00000";
    document.getElementById(element).style.border = "3px solid #c00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");

    //failure
    failureCounter++;
    let picture = "img/s" + failureCounter + ".jpg";
    document.getElementById("gallows").innerHTML =
      '<img src="' + picture + '" alt="" />';
  }
  //win
  if (password == shownPassword)
    document.getElementById("letters").innerHTML =
      "Wygrana. Poprawne  hasło: " +
      password +
      '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ? </span> ';
  //loss
  if (failureCounter >= 9)
    document.getElementById("letters").innerHTML =
      "Przegrana. Poprawne  hasło: " +
      password +
      '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ? </span> ';
}

function showPassword() {
  document.getElementById("board").innerHTML = shownPassword;
}
