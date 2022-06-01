'use strict'
// це об"єкт який володіє визовом функції
// збільшується гибкість коду
// коли немає контексту = undefined

// console.log(window) //внутрішній об"єкт браузера
// console.log(this) //ссилається на window 
// console.log() //метод консоль лог зберігається в window;

// const obj = {
//     age: 100,
//     run: function() {
//         const bindedLog = console.log.bind({name: 'Oleg'});
//         bindedLog(this)
//     }
// }
// console.log(obj.run());
// const func = obj.run;
// func()

// function run () {
//     console.log(this)
//     console.log(`I've running in ${this.city}`)
// }

// run()

// startTimer() {
//     function run () {
//         console.log('Lose context')
//     }
//     run();
// };

const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    intervalId: null,
    startTimer() {
        //input: none;
        //output: undefined;
        // console.log(this);
        // // console.log(this.secondsPassed);
        // setInterval(function () { // lose context
        //     console.log(this);
        //     console.log(this.secondsPassed);
        //     this.secondsPassed +=1;
        // }, 1000);
       this.intervalId = setInterval(() => { // в стрілкової ф-ї немає свого контексту і зсилається на зовнішній об"єкт
            // console.log(this);
            // console.log(this.secondsPassed);
            this.secondsPassed +=1;

            if(this.secondsPassed == 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 1000);
            setInterval((function () { // lose context
            console.log(this);
            console.log(this.secondsPassed);
            this.secondsPassed +=1;
        }).bind(this), 1000);
    },
    stopTimer() {
        clearInterval(this.intervalId);
    },
    getTime() {
        if(this.secondsPassed < 10) {
            return `${this.minsPassed}:0${this.secondsPassed}`
        }
        return `${this.minsPassed}:${this.secondsPassed}`
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}

// test data
// timer.startTimer()

// function run(city) {
//     console.log(`I've running in ${city}`)
// }

// === 
// 1. what is context?
// 2. when lose context (найчастіше в колбеках)
// 3. how to fix context (=>, bind)