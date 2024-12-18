// const WORK_TIME = 25 * 60; // 工作時間 (分鐘)
const WORK_TIME = 3; // 工作時間 (方便測試改為 3 秒)
const REST_TIME = 5 * 60; // 休息時間 (分鐘)

const STATES = {
  INITIAL: "INITIAL",
  START: "START",
  PAUSE: "PAUSE",
  TIME_IS_UP: "TIME_IS_UP",
};
// 目前狀態
let currentState = "";
// 剩餘秒數
let remainingSeconds = WORK_TIME;
// 計時器 id
let timerInterval = null;

// TODO DOM 元素
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const statusText = document.getElementById("statusText");

// TODO 按鈕元素
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const add5MinBtn = document.getElementById("add-5-btn");

// TODO 綁定事件
startBtn.addEventListener("click", () => {
  changeState(STATES.START);
});
pauseBtn.addEventListener("click", () => {
  changeState(STATES.PAUSE);
});
resetBtn.addEventListener("click", () => {
  changeState(STATES.INITIAL);
});
add5MinBtn.addEventListener("click", () => {
  remainingSeconds = 5 * 60;
  changeState(STATES.START);
});

function changeState(newState) {
  currentState = newState;
  console.log("changeState", newState);
  if (currentState === STATES.INITIAL) {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    add5MinBtn.disabled = true;
    resetTimer();
  } else if (currentState === STATES.START) {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    add5MinBtn.disabled = true;
    startTimer();
  } else if (currentState === STATES.PAUSE) {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
    add5MinBtn.disabled = true;
    pauseTimer();
  } else if (currentState === STATES.TIME_IS_UP) {
    startBtn.disabled = true;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
    add5MinBtn.disabled = false;
    timeIsUp();
  }
  statusText.textContent = currentState;
}

function startTimer() {
  // 若計時器已經在跑，不再重複啟動
  if (timerInterval) {
    return;
  }
  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateDisplay(remainingSeconds);
    if (remainingSeconds <= 0) {
      changeState(STATES.TIME_IS_UP);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  remainingSeconds = WORK_TIME;
  updateDisplay(remainingSeconds);
}

function timeIsUp() {
  clearInterval(timerInterval);
  timerInterval = null;
  updateDisplay(remainingSeconds);
}

// 更新倒數計時器顯示
function updateDisplay(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;

  minutesEl.textContent = String(mins).padStart(2, "0");
  secondsEl.textContent = String(secs).padStart(2, "0");
}

changeState(STATES.INITIAL);
