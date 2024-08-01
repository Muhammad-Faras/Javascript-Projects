function digitalClock() {
    let body = document.body;
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.height = '100vh';
    body.style.gap = '4rem';
    let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday']
    let day = new Date().getDay();
    let weekday = document.querySelector('.weekday');
    weekday.innerHTML = days[day];

    let hr = new Date().getHours();
    let hour = document.querySelector('.hour');
    hour.innerHTML = hr;

    let min = new Date().getMinutes();
    let minute = document.querySelector('.minute');
    minute.innerHTML = min;

    let sec = new Date().getSeconds();
    let second = document.querySelector('.second');
    second.innerHTML = sec;

    let time = document.querySelector('.time');
    if (hr > 0 && hr <= 12) {
        time.innerHTML = 'AM'
    }
    else {
        time.innerHTML = 'PM'
    }



}

digitalClock();
setInterval(digitalClock, 1000);