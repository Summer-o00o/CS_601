let time = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let welcome = document.getElementById('welcome');

    const updateTime = (number) => {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    };
    hour = updateTime(hour);
    minute = updateTime(minute);
    second = updateTime(second);
    let clock = document.getElementById('clock');
    clock.innerText = `${hour} : ${minute} : ${second}`;

    setTimeout(() => { time(); }, 1000);
};

time();