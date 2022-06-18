

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        
        if (id == undefined) {
            throw new Error('Не передан идентификатор таймера!');
        }
        
        if (this.alarmCollection.find(item => item === this.alarmCollection[id])) {
            throw console.error('Такой будильник уже есть!')
        }
        
        this.alarmCollection.push(
            {time, 
            callback, 
            id}
            );
    }

    removeClock() {
        this.alarmCollection = this.alarmCollection.filter(item => {return  item !== id});
       
       if (this.alarmCollection=== undefined) {
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
                    this.alarmCollection.forEach(alarm => checkClock(alarm))
                }, 100);
            }
        }
         
    
    }
}