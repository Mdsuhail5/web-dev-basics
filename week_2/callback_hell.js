// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

const { resolve } = require("path");

setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
        console.log("hello");
        setTimeout(function () {
            console.log('hello')
        }, 5000)
    }, 3000)
}, 1000)


//or
function step3Done() {
    console.log("hello there");
}

function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
}

function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);


//Promisified task

function greetpromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

greetpromisified(1000).then(function () {
    console.log('hi');
    greetpromisified(3000).then(function () {
        console.log('hello');
        greetpromisified(5000).then(function () {
            console.log('hello')
        })
    })
})

//alt solution
setTimeoutPromisified(1000)
    .then(function () {
        console.log("hi");
        return setTimeoutPromisified(3000);
    })
    .then(function () {
        console.log("hello");
        return setTimeoutPromisified(5000);
    })
    .then(function () {
        console.log("hello there");
    });
