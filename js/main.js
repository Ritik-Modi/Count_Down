const curr_state = document.getElementById("state");
const release_state = document.getElementById("release_date");
const Arrived_data = "15 june 2024 02:00:00 AM";

curr_state.textContent = "We Are Coming soon!!";
release_state.textContent = "15 june 2024 02:00:00 AM";

const inputs = document.querySelectorAll("input");

const Clock = () => {
  const date = new Date();
  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  //   const time = `${hour}:${minute}:${second}`;
  //   const date_time = `${day}/${month}/${year} ${time}`;

  const release_date = new Date(Arrived_data);
  const release_date_days = release_date.getDate();
  const release_date_Hour = release_date.getHours();
  const release_date_Minute = release_date.getMinutes();
  const release_date_Second = release_date.getSeconds();

  let remainingDays = release_date_days - day;
  let remainingHour = release_date_Hour - hour;
  let remainingMinute = release_date_Minute - minute;
  let remainingSecond = release_date_Second - second;

  if (remainingSecond < 0) {
    remainingSecond += 60;
    remainingMinute--;
  }
  if (remainingMinute < 0) {
    remainingMinute += 60;
    remainingHour--;
  }
  if (remainingHour < 0) {
    remainingHour += 60;
    remainingDays--;
  }

  inputs[0].value = remainingDays;
  inputs[1].value = remainingHour;
  inputs[2].value = remainingMinute;
  inputs[3].value = remainingSecond;

  diff = Math.floor((release_date - date) / 1000);

  if (diff > 0) {
    curr_state.textContent = "We Are Coming soon!!";
    release_state.textContent = "15 june 2024 02:00:00 AM";
  } else {
    curr_state.textContent = "We have Arrived!!";
    release_state.textContent = "Its 15 june ☃️☃️☃️☃️";
    return;
  }
};

Clock();

setInterval(() => {
  Clock();
}, 1000);
