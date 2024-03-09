document.addEventListener("DOMContentLoaded", function () {
    const timeDisplay = document.querySelector(".time");
    const startButton = document.getElementById("start");
    const pauseButton = document.getElementById("pause");
    const resetButton = document.getElementById("reset");
  
    let timer;
    let isRunning = false;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
  
    function startStopwatch() {
      timer = setInterval(updateStopwatch, 1000);
      isRunning = true;
    }
  
    function pauseStopwatch() {
      clearInterval(timer);
      isRunning = false;
    }
  
    function resetStopwatch() {
      clearInterval(timer);
      isRunning = false;
      seconds = 0;
      minutes = 0;
      hours = 0;
      updateDisplay();
    }
  
    function updateStopwatch() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }
  
    function updateDisplay() {
      const formattedTime = formatTime(hours, minutes, seconds);
      timeDisplay.textContent = formattedTime;
    }
  
    function formatTime(hours, minutes, seconds) {
      return (
        padNumber(hours) + ":" +
        padNumber(minutes) + ":" +
        padNumber(seconds)
      );
    }
  
    function padNumber(number) {
      return number < 10 ? "0" + number : number;
    }
  
    startButton.addEventListener("click", function () {
      if (!isRunning) {
        startStopwatch();
      }
    });
  
    pauseButton.addEventListener("click", function () {
      if (isRunning) {
        pauseStopwatch();
      }
    });
  
    resetButton.addEventListener("click", resetStopwatch);
  });
  