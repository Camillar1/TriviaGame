function check() {

    var question = document.quiz.question.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question == "Dictionary") {
        correct++;
    }
    if (question2 == "Uranus") {
        correct++;
    }
    if (question3 == "Amazon") {
        correct++;
    }
    if (question4 == "8,000 miles") {
        correct++;
    }

    var messages = ["You really need to do better", "Great job", "Thats just okay", "You are getting close"];
    var pictures = ["https://media.giphy.com/media/4QFBnyQR6G7FJ5FdA4/giphy.gif", 
    "https://media.giphy.com/media/3oKIPwZVHEiM2B3ljq/giphy.gif", 
    "https://media.giphy.com/media/5kzB8SARBWCmQ/giphy.gif", 
    "https://media.giphy.com/media/d31wPh73vYYwhCgg/giphy.gif"];
    var range;

    if (correct < 1) {
        range = 0;
    }
    if (correct > 2 && correct < 4) {
        range = 3;
    }

    if (correct > 0 && correct < 3) {
        range = 2;
    }
    if (correct > 3) {
        range = 1;
    }

    document.getElementById("messages").innerHTML = messages[range];
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("pictures").src = pictures[range];
}
