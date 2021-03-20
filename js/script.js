let btn = document.getElementById("btn");
let input = document.getElementById("input");
let output = document.getElementById("output");

function calculate() {
  let year, month, day;
  let inputData = input.value;

  if (inputData.length !== 0) {
      [year, month, day] = inputData.split("-");
      year = Number(year);
      month = Number(month);
      day = Number(day);

    let current = new Date();
    let currentYear = current.getFullYear();
    let currentMonth = current.getMonth() + 1; // get month start with 0. so, 1 will be added
    let currentDate = current.getDate();

    // Happy Birthday part
    if (day === currentDate && month === currentMonth) {
      if(year > currentYear){
        alert('Is this possible ?');
        return;
      }
      let birthday = currentYear - year;
          output.innerHTML = `Congratulation! Today Is your birthday your are <span class="year">${birthday}</span> Years Old. `;
          return;
    }
    // calculation part
      let isBig = false;
      if (day > currentDate) {
        let Newdate = currentDate + 30;
            day = Newdate - day;
            currentMonth = currentMonth - 1;
            isBig = true;
      } else {
            day = currentDate - day;
      }
      if (month > currentMonth) {
        let newMonth = currentMonth + 12;
            month = newMonth - month;
            currentYear = currentYear - 1;
            isBig = true;
      } else {
            month = currentMonth - month;
      }
      if(isBig == true && year > currentYear){
        alert('Is this possible ?');
        return;
      }
        year = currentYear - year;
        output.innerHTML = `Your Age : <span class="year">${year}</span> Year <span class="month">${month}</span> Month <span class="day">${day}</span> Days.`;
  } else {
    alert("Please Input your Birth date");
  }
}
