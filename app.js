// TIMING EVENTS EXERCISE
// 1
setTimeout(() => {
    const h1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    h1.innerText = `Hi`;
    h1.append(p1);
}, 1000);

// 2
setTimeout(() => {
    const h2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    h2.innerText = `One`;

    setTimeout(() => {
        const h3 = document.createElement(`p`);
        h3.innerText = `Two`;
        h2.append(h3);
    }, 1000);
}, 2000);

// 3a
let count = 1;
const stop = setInterval(() => {
    console.log(count);
    count++;
}, 1000)

// 3b
const stopButton = document.querySelector(`button`);
stopButton.addEventListener(`click`, () => {
    clearInterval(stop);
});

// BONUS
// 4
const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
let num = 120;
const count2 = setInterval(() => {
    if (num > 0){
        let minutes = Math.floor(num/60);
        let seconds = num -minutes * 60;
        p3.innerText = `${minutes}:${seconds}`;
        div3.append(p3);
    }else {
        clearInterval(count);
        p3.innerText = `TIME IS UP`;
        div3.append(p3);
    }
    num--;
}, 1000);