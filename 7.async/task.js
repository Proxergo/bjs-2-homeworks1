

class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        
        if (id == undefined) {
            throw new Error('Не передан идентификатор таймера!');
        } else if (this.alarmCollection.find(item => item.id === id) !== undefined) {
            throw console.error('Такой будильник уже есть!')
        } else {
            return this.alarmCollection.push({time, callback, id});
        }
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
       
       if (this.alarmCollection === undefined) {
            return false;
       } 

       return true;
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`;
    }

    start() {
        let checkClock = function(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return alarm.callback;
            }

            if (this.timerId === null) {
                this.setInterval(() => {
                    this.alarmCollection.forEach(item => checkClock(item));
                }, 100);
            }
            return;
        } 
    }

    stop() {

        if (this.timerId !== null) {
                clearInterval(this.timerId);
                this.timerId - null;
        }
     }
    
    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id + ' ' + item.time));
    }

    clearAlarms() {
        this.stop();
        this.timerId = [];
    }
}

function testCase() {
	let clock = new AlarmClock();
	clock.addClock(clock.getCurrentFormattedTime(), () => console.log('Доброе утро!'),60);
	let currentDate = new Date();
	currentDate.setMinutes(currentDate.getMinutes() + 1);
	clock.addClock(clock.getCurrentFormattedTime(currentDate), () => { console.log('Пора встать!'); clock.removeClock(215) }, 215);
	currentDate = new Date();
	currentDate.setMinutes(currentDate.getMinutes() + 2);
	clock.addClock(clock.getCurrentFormattedTime(currentDate),
		() => { console.log('Вставай уже! Всё проспишь!'); clock.stop(); clock.clearAlarms() }, 3000);
	clock.printAlarms();
	clock.start();
}