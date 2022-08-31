import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const fieldInput = document.querySelector('input#datetime-picker');
const StartBtn = document.querySelector('button[data-start]');

const options = {
  enableTime: true, //Вмикає засіб вибору часу boolean - false
  time_24hr: true, //Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  defaultDate: new Date(), // Встановлює початкові вибрані дати.  String
  minuteIncrement: 1, //Регулює крок для введення хвилин
  onClose(selectedDates) {
    //Функції, які запускаються щоразу, коли календар закривається. Перегляньте Events API
    const selectDateTime = new Date(selectedDates[0]);
    startBtnSet(selectDateTime);
  },
};

flatpickr('input#datetime-picker', options);


function startBtnSet(selectDateTime) {
  const dateNow = Date.now();
  const dateSelect = selectDateTime.getTime()
// const timeInPast = dateNow - dateSelect
// const timeInFuture
  console.log(dateNow);
  console.log(dateSelect);
if(dateNow - dateSelect >= 0) {
  StartBtn.disabled = true;
  alert('Please, choose a date in the future');
}
if (dateNow - dateSelect <= 0) {

}


}



















// console.log(options.selectDayTime);



// const selectTime = fieldInput.value;
// console.log(selectTime);

// const currentTime = Date.now()

// // fieldInput.addEventListener('blur', () => {
// //   console.log(selectTime);
// // })
// console.log(currentTime);

// StartBtn.addEventListener('click', () => {
//   console.log(selectTime);
//   console.log(options.defaultDate);
// });

// function showSelectTime() {
//   console.log(selectTime);
//   // console.log(options.onClose().getTime());
//   console.log(options.defaultDate.getTime());
// }

// showSelectTime();

// const date = new Date(options.defaultDate.getTime());

// console.log(date);
// console.log(options);

// onClose: function(selectedDates, dateStr, instance){
//    // ...
// }
// options.selectDayTime1();