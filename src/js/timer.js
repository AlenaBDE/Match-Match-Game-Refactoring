let second = document.getElementById('second').innerHTML;

class taskTimer {

    constructor(sec) {
        this.defaultSec = sec;
        this.timerID = 0;
        second = this.defaultSec;
    }

    getTime() {
        function fixTimer(value) {
            let str = String(value);
            let result = (value < 10 && str.length === 1) ? "0" + value : value;
            return result;
        }

        if (second > 0) {
            second--;
        }

        document.getElementById('second').innerHTML = fixTimer(second);
        if (second == 0) {
            clearInterval(this.timerID);
        }
    }

    startTimer() {
        second = this.defaultSec;
        this.timerID = setInterval(this.getTime, 1000);
    }

    stopTimer() {
        clearInterval(this.timerID);
    }

    value() {
        return second;
    }

    setValue(value) {
        second = value;
    }
}

module.exports = taskTimer;

