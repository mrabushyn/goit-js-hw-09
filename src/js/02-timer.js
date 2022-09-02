import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  body: document.querySelector('body'),
  fieldInput: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysField: document.querySelector('.value[data-days]'),
  hoursField: document.querySelector('.value[data-hours]'),
  minutesField: document.querySelector('.value[data-minutes]'),
  secondsField: document.querySelector('.value[data-seconds]'),
};

refs.body.insertAdjacentHTML('beforebegin',   `<style>
    .timer {
      display: flex;
    } 
    .field {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
      font-family: Roboto;
    }
    .value {
      font-size: 40px;
    }
    .label {
      text-transform: uppercase;
      font-size: 12px;
    }
  </style>)`);


const options = {
  enableTime: true, //Вмикає засіб вибору часу boolean - false
  time_24hr: true, //Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  defaultDate: new Date(), // Встановлює початкові вибрані дати.  String
  minuteIncrement: 1, //Регулює крок для введення хвилин
  onClose(selectedDates) { //Функції, які запускаються щоразу, коли календар закривається. Перегляньте Events API
    const selectDateTime = new Date(selectedDates[0]);
    chooseDate(selectDateTime);
  },
};

flatpickr('input#datetime-picker', options);

  refs.startBtn.disabled = true;

function chooseDate(selectDateTime) {
  const dateNow = Date.now();
  const dateSelect = selectDateTime.getTime();
  const timeInPast = dateSelect - dateNow <= 0;
  const timeInFuture = dateSelect - dateNow > 0;
  if (timeInPast) {
    refs.startBtn.disabled = true;
    window.alert('Please, choose a date in the future');
    return;
  }
  if (timeInFuture) {
    refs.startBtn.disabled = false;
    const ms = dateSelect - dateNow;
    convertMs(ms);
  }
  refs.startBtn.addEventListener('click', event => {
    timer.start(dateSelect);
    if (event) {
      refs.startBtn.disabled = true;
      refs.fieldInput.disabled = true;
    }
  });
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  refs.daysField.textContent = days;
  refs.hoursField.textContent = hours;
  refs.minutesField.textContent = minutes;
  refs.secondsField.textContent = seconds;

  return { days, hours, minutes, seconds };
}

const timer = {
  intervalId: null,
  start(dateSelect) {
    this.intervalId = setInterval(() => {
      const currentTine = Date.now();
      const timerTimeOn = dateSelect - currentTine;
      console.log(timerTimeOn);
      convertMs(timerTimeOn);
      if (timerTimeOn < 1000) {
        console.log('YOU WIN $1 000 000');
        this.stop();
        refs.daysField.textContent = 'TH';
        refs.hoursField.textContent = 'E';
        refs.minutesField.textContent = 'E';
        refs.secondsField.textContent = 'ND';
      }
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
  },
};
