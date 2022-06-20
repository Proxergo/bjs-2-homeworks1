//1

const cachingDecoratorNew = func => {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(','); 
    let objectInCache = cache.findIndex((item) => item.hash === hash);
    if (objectInCache  !== -1 ) { 
      console.log("Из кэша: " + cache[objectInCache ].result); 
      return "Из кэша: " + cache[objectInCache ].result;
    }
  
    let result = func(...args); 
    cache.push({hash, result});
    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
  }




//2


const debounceDecorator = (f, ms) => {
  let timerId;

    function wrapper(...args) {
        if (timerId === undefined) {
            timerId = Date.now();
            f.apply(this, args);
        } else {
            let elapsedTime = Date.now() - timerId;
            if (elapsedTime >= ms) {
                timerId = Date.now();
                f.apply(this, args);
            }
        }
    }

    return wrapper;
};

const showCoords = () => console.log("Сигнал отправленs");
const showCoordsDebounced = debounceDecorator(showCoords, 2000);


 
setTimeout(showCoordsDebounced); 
setTimeout(showCoordsDebounced, 300); 
setTimeout(showCoordsDebounced, 900); 
setTimeout(showCoordsDebounced, 1200); 
setTimeout(showCoordsDebounced, 2300); 
setTimeout(showCoordsDebounced, 4400); 
setTimeout(showCoordsDebounced, 4500);

 //3


const debounceDecorator2 = (f, ms) => {
  let timerId;
  let time = false;

  const wrapper = (...args) => {
    clearTimeout(timerId);

    if(!time) {
      f(...args);
      wrapper.count ++;
      time = true;
    }

    timerId = setTimeout(() => time = false, ms);
  }

  wrapper.count = 0;
  return wrapper;
}


const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
setTimeout(upgradedSendSignal); 
setTimeout(upgradedSendSignal, 300); 
setTimeout(upgradedSendSignal, 900); 
setTimeout(upgradedSendSignal, 1200); 
setTimeout(upgradedSendSignal, 2300); 
setTimeout(upgradedSendSignal, 4400); 
setTimeout(upgradedSendSignal, 4500); 