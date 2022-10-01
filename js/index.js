// const buttons = document.querySelectorAll(".btn");
// // console.log(buttons);
// const result = document.getElementById("result");

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         button.classList.toggle("btn-selected");
//     })
// })


// Get the container element
const selectionContainer = document.querySelector(".selection");
const thankYouContainer = document.querySelector(".thank-you");
const result = document.getElementById("result");
const btnContainer = document.querySelector(".btn-container");
const btnSubmit = document.getElementById("submit");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
let i = 0;
result.textContent = "4";
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e) {
    let current = document.getElementsByClassName("btn-selected");
    current[0].className = current[0].className.replace(" btn-selected", "");
    this.className += " btn-selected";
    result.textContent = e.target.id;
  });
}

btnSubmit.addEventListener("click", () => {
    selectionContainer.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
})

