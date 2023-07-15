// // Give my button functionality
// //increment button should start count from 1
// // reset takes the buttonback to zero 
// // decrement start from -
let count = 0;

// the button
const myBtn = document.querySelectorAll(".btn");

// the first value
const value = document.querySelector(".count");
value.innerHTML = count;

myBtn.forEach((btn) => {
  btn.addEventListener("click", (changeColor) => {
    // Check which button was clicked by checking its class
    if (btn.classList.contains("increase")) {
      count++;
    } else if (btn.classList.contains("decrease")) {
      count--;
    } else if (btn.classList.contains("reset")) {
      count = 0;
    }
    
    // Update the value displayed on the page
    value.innerHTML = count;
  });
});


changeColor = () => {
    if(btn.classList.contains("primary")){
        count.style.backgroundColor = "primay"
    }
}
