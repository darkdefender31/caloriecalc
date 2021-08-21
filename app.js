
var personInfo = {
    age: 25,
    gender: 'male',
    height: 180,
    weight: 65
};

var ageInput = document.getElementById("age-input");
var genderSelection = document.getElementById('gender-selection');
var weightInput = document.getElementById('weight-input');
var heightInput = document.getElementById('height-input');
var activityLevelSelection = document.getElementById('activity-level');
var enterButton = document.getElementById('enter-info-btn')
var containerResult = document.getElementById('result-container');
var backgroundImgDark = document.getElementById('background-image');
enterButton.addEventListener('click', getResult);

function displayInfo() {
    console.log(personInfo);
};

function getResult() {

    personInfo.age = ageInput.value;
    personInfo.gender = genderSelection.value;
    personInfo.height = heightInput.value;
    personInfo.weight = weightInput.value;

    if (personInfo.age !== "" && personInfo.gender !== "" && personInfo.height !== "" && personInfo.weight !== "" && activityLevelSelection.value !== "") {
        if (activityLevelSelection.value === "sedentary" && personInfo.gender === 'male') {
            var menInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) + 5;
            var menMaintResultS = menInfoResult * 1.2;
            console.log(menMaintResultS);
            return showResult(menMaintResultS);
        }
        if (activityLevelSelection.value === "sedentary" && personInfo.gender === 'female') {
            var femaleInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) - 161;
            var femaleMaintResultS = femaleInfoResult * 1.2;
            console.log(femaleMaintResultS);
            return showResult(femaleMaintResultS);
        }

        if (activityLevelSelection.value === "lightlyActive" && personInfo.gender === 'male') {
            var menInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) + 5;
            var menMaintResultL = menInfoResult * 1.375;
            console.log(menMaintResultL);
            return showResult(menMaintResultL);
        }
        if (activityLevelSelection.value === "lightlyActive" && personInfo.gender === 'female') {
            var femaleInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) - 161;
            var femaleMaintResultL = femaleInfoResult * 1.375;
            console.log(femaleMaintResultL);
            return showResult(femaleMaintResultL);
        }

        if (activityLevelSelection.value === "moderatelyActive" && personInfo.gender === 'male') {
            var menInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) + 5;
            var menMaintResultM = menInfoResult * 1.55;
            console.log(menMaintResultM);
            return showResult(menMaintResultM);
        }
        if (activityLevelSelection.value === "moderatelyActive" && personInfo.gender === 'female') {
            var femaleInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) - 161;
            var femaleMaintResultM = femaleInfoResult * 1.55;
            console.log(femaleMaintResultM);
            return showResult(femaleMaintResultM);
        }

        if (activityLevelSelection.value === "veryActive" && personInfo.gender === 'male') {
            var menInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) + 5;
            var menMaintResultV = menInfoResult * 1.725;
            console.log(menMaintResultV);
            return showResult(menMaintResultV);
        }
        if (activityLevelSelection.value === "veryActive" && personInfo.gender === 'female') {
            var femaleInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) - 161;
            var femaleMaintResultV = femaleInfoResult * 1.725;
            console.log(femaleMaintResultV);
            return showResult(femaleMaintResultV);
        }

        if (activityLevelSelection.value === "extraActive" && personInfo.gender === 'male') {
            var menInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) + 5;
            var menMaintResultE = menInfoResult * 1.9;
            console.log(menMaintResultE);
            return showResult(menMaintResultE);
        }
        if (activityLevelSelection.value === "extraActive" && personInfo.gender === 'female') {
            var femaleInfoResult = (10 * personInfo.weight) + (6.25 * personInfo.height) - (5 * personInfo.age) - 161;
            var femaleMaintResultE = femaleInfoResult * 1.9;
            console.log(femaleMaintResultE);
            return showResult(femaleMaintResultE);
        }
    }
}

function showResult(maintenance) {
    containerResult.innerHTML = "";
    backgroundImgDark.style.filter = "brightness(0.5)";
    var createFinalResultD = document.createElement('div');
    var createAdvice = document.createElement('p');
    var exitBtn = document.createElement('button');
    containerResult.appendChild(createFinalResultD);
    createFinalResultD.appendChild(createAdvice);
    createFinalResultD.appendChild(exitBtn);
    createAdvice.innerText = "Estimated intake to maintain your weight is " + Math.round(maintenance) + " calories. To lose or gain weight expirement with adding or removing 200 calories per day. See how you react to it after 2 weeks and adjust accordingly.";
    exitBtn.innerText = "Exit";
    exitBtn.addEventListener('click', closePopUp);
    displayInfo();
};

function closePopUp() {
    containerResult.innerHTML = "";
    backgroundImgDark.style.filter = "brightness(1)";
}