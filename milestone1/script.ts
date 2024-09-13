const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement
const skillsection = document.getElementById("skills") as HTMLElement

toggleButton.addEventListener("click", ()=> {
    if(skillsection.style.display === "none") {
        skillsection.style.display = "block"
    } else {
        skillsection.style.display = "none" 
    }
})