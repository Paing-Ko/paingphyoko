const timeInput = document.getElementById("time-input");
const displayTime = document.getElementById("display-time");
let interval;

// New event listener for the timeInput
timeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    startTimer();
  }
});

function startTimer() {
  let timeLeft = timeInput.value;

  // Check if input is not a number or less than or equal to 0
  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Please enter a valid time greater than 0.");
    return; // Exit the function
  }

  // Display the initial value
  displayTime.textContent = timeLeft;

  // Clear any existing interval
  clearInterval(interval);

  // Update every second
  interval = setInterval(function () {
    timeLeft--;
    displayTime.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      displayTime.textContent = "0";
      timeInput.value = ""; 

      alert("Time's up!");
    }
  }, 1000);
}

timeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    startTimer();
  }
});
