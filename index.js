const firstName = document.querySelector("#inputFirst")
const lastName = document.querySelector("#inputLast")
const firstBtn = document.querySelector("#subFirst")
const lastBtn = document.querySelector("#subLast")
const lastShow = document.querySelector("#lastDisplay")

function grabInput () {
    let firstShow = document.getElementById("firstDisplay")
    firstShow.innerText = firstName.value;
}
firstBtn.addEventListener("click", grabInput)

let entryDiv = document.createElement("div");
entryDiv.className = "single-entry";
entryDiv.textContent = "This is an entry Div, see me roar.";
body.append(entryDiv)
