function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "aqField", "mt-2");
    newNode.setAttribute("rows", "2");
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.parentNode.insertBefore(newNode, aqAddButtonOb);
}

function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.parentNode.insertBefore(newNode, weAddButtonOb);
}

function generateCV() {
    // Personal information
    document.getElementById("nameT1").innerHTML = document.getElementById("nameField").value || "N/A";
    document.getElementById("nameT2").innerHTML = document.getElementById("nameField").value || "N/A";

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value || "N/A";
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value || "N/A";

    // social links
    document.getElementById("fbT").href = document.getElementById("fbField").value || "#";
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value || "N/A";

    document.getElementById("LinkedInT").href = document.getElementById("LinkedInField").value || "#";
    document.getElementById("LinkedInT").innerHTML = document.getElementById("LinkedInField").value || "N/A";

    document.getElementById("instaT").href = document.getElementById("instaField").value || "#";
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value || "N/A";

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value || "N/A";

    // Work Experience
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        if (e.value.trim() !== "") {
            str += `<li>${e.value}</li>`;
        }
    }
    document.getElementById("weT").innerHTML = str || "<li>No work experience provided.</li>";

    // Academic Qualifications
    let aqs = document.getElementsByClassName("aqField");
    let str2 = "";
    for (let e of aqs) {
        if (e.value.trim() !== "") {
            str2 += `<li>${e.value}</li>`;
        }
    }
    document.getElementById("aqT").innerHTML = str2 || "<li>No qualifications provided.</li>";

    // Switch views
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-image");
let ProfileImage = document.getElementById("profile-image");
 
inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    ProfileImage.src = URL.createObjectURL(inputFile.files[0]);
}

function editCV() {
    document.getElementById('cv-template').style.display = 'none';
    document.getElementById('cv-form').style.display = 'block';
}

function printCV() {
    window.print();
}


