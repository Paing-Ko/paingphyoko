let interval;

function startTimer() {
  const timeInput = document.getElementById("time-input");
  const displayTime = document.getElementById("display-time");

  let timeLeft = timeInput.value;

  // Clear any existing interval
  clearInterval(interval);

  // Update every second
  interval = setInterval(function () {
    timeLeft--;
    displayTime.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      displayTime.textContent = "0";

      // Stretch Requirement: Notify user
      alert("Time's up!");
    }
  }, 1000);
}
