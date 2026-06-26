// ===============================
// INTERACTIVE EYE DIAGRAM
// ===============================

function showInfo(part) {

    let title = "";
    let info = "";

    if (part === "cornea") {
        title = "🛡️ Cornea";
        info = "Cornea is the transparent front layer of the eye. It protects the eye and helps light enter.";
    }

    else if (part === "iris") {
        title = "🌈 Iris";
        info = "Iris is the coloured part of the eye. It controls the size of the pupil.";
    }

    else if (part === "pupil") {
        title = "⚫ Pupil";
        info = "Pupil is the black opening of the eye. Light enters through the pupil.";
    }

    else if (part === "lens") {
        title = "🔍 Lens";
        info = "Lens focuses light onto the retina so we can see clearly.";
    }

    else if (part === "retina") {
        title = "🎯 Retina";
        info = "Retina converts light into nerve signals and sends them to the brain.";
    }

    else if (part === "optic") {
        title = "🧠 Optic Nerve";
        info = "Optic nerve carries visual information from the eye to the brain.";
    }

    document.getElementById("infoBox").innerHTML =
        "<h2>" + title + "</h2><p>" + info + "</p>";

}



// ===============================
// QUIZ
// ===============================

let score = 0;
let answered = 0;

function checkAnswer(button, correct) {

    if (button.disabled)
        return;

    answered++;

    if (correct) {

        score++;
        button.style.background = "green";

    }

    else {

        button.style.background = "red";

    }

    button.disabled = true;

    let scoreBox = document.getElementById("score");

    if (scoreBox) {

        scoreBox.innerHTML =
            "🏆 Score : " + score + " / 10";

        if (answered === 10) {

            if (score >= 8) {

                scoreBox.innerHTML +=
                    "<br><br>🎉 Excellent! You know the human eye very well.";

            }

            else if (score >= 5) {

                scoreBox.innerHTML +=
                    "<br><br>😊 Good Job! Keep Learning.";

            }

            else {

                scoreBox.innerHTML +=
                    "<br><br>📚 Practice more and try again.";

            }

        }

    }

}



// ===============================
// EYE CARE TIPS
// ===============================

function showTips() {

    let list =
        document.getElementById("tipsList");

    if (!list)
        list = document.getElementById("tips");

    list.innerHTML =

        "<li>🥕 Eat carrots and green vegetables.</li>" +

        "<li>💧 Drink enough water.</li>" +

        "<li>😴 Sleep 7-8 hours daily.</li>" +

        "<li>💻 Follow the 20-20-20 rule.</li>" +

        "<li>🕶 Wear sunglasses outdoors.</li>" +

        "<li>🚫 Never rub your eyes.</li>" +

        "<li>👨‍⚕ Visit an eye doctor regularly.</li>";

}



// ===============================
// SIMULATION GAME
// ===============================

let gameScore = 0;

function playFocus(type) {

    let ray =
        document.getElementById("simpleRay");

    let message =
        document.getElementById("gameMessage");

    let scoreText =
        document.getElementById("gameScore");

    if (type === "up") {

        ray.style.transform =
            "rotate(-15deg)";

        message.innerHTML =
            "❌ Oops! Light missed above the Retina.";

    }

    else if (type === "down") {

        ray.style.transform =
            "rotate(15deg)";

        message.innerHTML =
            "❌ Oops! Light missed below the Retina.";

    }

    else {

        ray.style.transform =
            "rotate(0deg)";

        message.innerHTML =
            "🎉 Great! Light reached the Retina perfectly.";

        gameScore++;

    }

    scoreText.innerHTML =
        "⭐ Score : " + gameScore;

}



function resetGame() {

    gameScore = 0;

    document.getElementById("simpleRay").style.transform =
        "rotate(0deg)";

    document.getElementById("gameMessage").innerHTML =
        "Choose one option 👇";

    document.getElementById("gameScore").innerHTML =
        "⭐ Score : 0";

}
let totalGameScore = 0;
let focusDone = false;
let guessDone = false;
let careDone = false;

function updateTotalScore() {
  document.getElementById("totalScore").innerHTML = totalGameScore;
}

function focusGame(type) {
  let ray = document.getElementById("focusRay");
  let msg = document.getElementById("focusMsg");

  if (type === "up") {
    ray.style.transform = "rotate(-14deg)";
    msg.innerHTML = "❌ Light went above the retina.";
  } else if (type === "down") {
    ray.style.transform = "rotate(14deg)";
    msg.innerHTML = "❌ Light went below the retina.";
  } else {
    ray.style.transform = "rotate(0deg)";
    msg.innerHTML = "✅ Perfect! Light reached the retina.";

    if (!focusDone) {
      totalGameScore++;
      focusDone = true;
      updateTotalScore();
    }
  }
}

function guessPart(button, correct) {
  let msg = document.getElementById("guessMsg");

  if (guessDone) return;

  if (correct) {
    button.style.background = "green";
    msg.innerHTML = "✅ Correct! Iris controls pupil size.";
    totalGameScore++;
  } else {
    button.style.background = "red";
    msg.innerHTML = "❌ Wrong! Correct answer is Iris.";
  }

  guessDone = true;
  updateTotalScore();
}

function careChoice(correct) {
  let msg = document.getElementById("careMsg");

  if (careDone) return;

  if (correct) {
    msg.innerHTML = "✅ Correct! Screen breaks protect eyes.";
    totalGameScore++;
  } else {
    msg.innerHTML = "❌ Wrong! Choose a healthy habit.";
  }

  careDone = true;
  updateTotalScore();
}

function resetAllGames() {
  totalGameScore = 0;
  focusDone = false;
  guessDone = false;
  careDone = false;

  document.getElementById("focusRay").style.transform = "rotate(0deg)";
  document.getElementById("focusMsg").innerHTML = "Choose the correct focus 👇";
  document.getElementById("guessMsg").innerHTML = "Select one answer.";
  document.getElementById("careMsg").innerHTML = "Pick the healthy habit.";
  updateTotalScore();

  let buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.background = "#0077b6";
  }
}