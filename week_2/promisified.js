// // const fs = require("fs");

const { resolve } = require("path");

// const { resolve } = require("path");
// const { callbackify } = require("util");

// // const contents = fs.readFileSync("a.txt", "utf-8");
// // console.log(contents);

// //Promisified Settimeout function
// // function setTimeoutpromisified(ms) {
// //     return new Promise(resolve => setTimeout(resolve, ms));
// // }

// // function callback() {
// //     console.log("3 seconds have passed")
// // }



// // setTimeoutpromisified(3000).then(callback);

// //Promisified readfile fucntion
// // const fs = require("fs");
// // const { error } = require("console");

// // function readFilepromisified(Filename) {
// //     return new Promise(read => (read(Filename)))
// // }

// // function read(Filename) {
// //     const contents = fs.readFile(Filename, "utf-8");
// //     console.log(contents);
// // }

// // readFilepromisified('a.txt').then(read)
// const fs = require("fs")
// function readFilePromisified(Filename) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(Filename, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// };

// readFilePromisified('a.txt').then(result => console.log(result)).catch(error => console.error(error));

// // const myPromise = new Promise((resolve, reject) => {
// //     const success = true;
// //     if (success) {
// //         resolve("I did it!");
// //     } else {
// //         reject("Something went wrong.");
// //     }
// // });

// // myPromise.then(result => console.log(result)).catch(error => console.error(error));

// //writing a file
// function writeFilePromisified(Filename) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(Filename, 'Hello everyone', (err) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve("File written successfully")
//             }
//         })
//     })
// };

// function cb(result) {
//     console.log(result)
// }
// writeFilePromisified('a.txt').then(cb).catch(error => console.error(error));

//setTimout promisified


function readthefile(resolve) {
    setTimeout(resolve, 3000)
}

function setTimeoutpromisified() {
    return new Promise(readthefile)
}



function callbk() {
    console.log("timer is done")
}


const p = setTimeoutpromisified();
p.then(callbk)



//
function morning_greet(resolve) {
    resolve("Good morning! Have a great day..")
}


function gmpromise() {
    return new Promise(morning_greet)
}

function ck(resolve) {
    console.log(resolve)
}
const gm = gmpromise();
gm.then(ck)


//promise class
class Promise2 {
    constructor(fn) {
        function afterdone() {
            this.resolve();
        }
        fn(afterdone)
    }

    this(callback) {
        this.resolve = callback;
    }

}