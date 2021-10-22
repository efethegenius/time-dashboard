const btn = document.querySelectorAll(".btn");
const hours = document.querySelector(".hours");
const period = document.querySelector(".period");
const playHours = document.querySelector(".play-hours");
const playPeriod = document.querySelector(".play-period");
const studyHours = document.querySelector(".study-hours");
const studyPeriod = document.querySelector(".study-period");
const exerciseHours = document.querySelector(".exercise-hours");
const exercisePeriod = document.querySelector(".exercise-period");
const socialHours = document.querySelector(".social-hours");
const socialPeriod = document.querySelector(".social-period");
const selfCareHours = document.querySelector(".selfcare-hours");
const selfCarePeriod = document.querySelector(".selfcare-period");
const activeButton = document.querySelector(".active-button");

btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("daily")) {
      hours.textContent = "5hrs";
      period.textContent = "Yesterday - 7hrs";
      playHours.textContent = "1hr";
      playPeriod.textContent = "Yesterday - 2hrs";
      studyHours.textContent = "0hrs";
      studyPeriod.textContent = "Yesterday - 1hr";
      exerciseHours.textContent = "1hr";
      exercisePeriod.textContent = "Yesterday - 1hr";
      socialHours.textContent = "1hr";
      socialPeriod.textContent = "Yesterday - 3hrs";
      selfCareHours.textContent = "0hrs";
      selfCarePeriod.textContent = "Yesterday - 1hr";
    }
    if (styles.contains("weekly")) {
      hours.textContent = "32hrs";
      period.textContent = "Last Week - 36hrs";
      playHours.textContent = "10hrs";
      playPeriod.textContent = "Last Week - 8hrs";
      studyHours.textContent = "4hrs";
      studyPeriod.textContent = "Last Week - 7hrs";
      exerciseHours.textContent = "4hrs";
      exercisePeriod.textContent = "Last Week - 5hrs";
      socialHours.textContent = "5hrs";
      socialPeriod.textContent = "Last Week - 10hrs";
      selfCareHours.textContent = "2hrs";
      selfCarePeriod.textContent = "Last Week - 2hrs";
    }
    if (styles.contains("monthly")) {
      hours.textContent = "103hrs";
      period.textContent = "Last Month - 128hrs";
      playHours.textContent = "28hrs";
      playPeriod.textContent = "Last Month - 29hrs";
      studyHours.textContent = "13hrs";
      studyPeriod.textContent = "Last Month - 19hrs";
      exerciseHours.textContent = "11hrs";
      exercisePeriod.textContent = "Last Month - 18hrs";
      socialHours.textContent = "21hrs";
      socialPeriod.textContent = "Last Month - 23hrs";
      selfCareHours.textContent = "7hrs";
      selfCarePeriod.textContent = "Last Month - 11hrs";
    }
  });
});
