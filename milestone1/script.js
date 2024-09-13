var toggleButton = document.getElementById("toggle-skills");
var skillsection = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skillsection.style.display === "none") {
        skillsection.style.display = "block";
    }
    else {
        skillsection.style.display = "none";
    }
});
