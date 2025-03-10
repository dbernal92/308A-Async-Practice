// Async Programming Practice
// Practicing with Batman terminology in order to understand concepts with a different context

// 1. The Bat-Signal Delay
// The Bat-Signal has been activated, but Batman is in the middle of analyzing crime reports. The Batcomputer must alert him as soon as possible, but without interrupting his current task.

function analyzeReports() {
    console.log("Batman is anazlying crime reports for cases.")
}

function alertBatSignal() {
    setTimeout(() => {
        console.log("Bat-Signal has been activated: Batman is needed immediately!")
        // Three-second delay
    }, 3000);
}

analyzeReports();
alertBatSignal();
// Executes before the alert because synchronous code is executed first
// Event Loop: Immediate tasks are first, then async tasks
console.log("Batman's evening continues...");

console.log("------");

// Convert solution to a promise
function promiseBatSignalAlert() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Bat-Signal has been activated: Batman is the only one who can save Gotham!");
        }, 5000);
    })
}

analyzeReports();
promiseBatSignalAlert().then((message) => {
    console.log(message);
})

console.log("Batman is focusing on his work, as usual...")

// 2. Robin's Recon Mission
// Batman sends Robin to gather intel on Penguin’s smuggling operation. However, the mission has three possible outcomes:

// - Robin successfully reports back with Penguin’s location.
// - Robin encounters trouble and cannot complete the mission.
// - Robin gets captured, and Batman must step in.

function investigatePenguin() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Penguin is located at the Iceberg Lounge!");
        },);
    })
}

investigatePenguin().then((message) => {
    console.log(message);
})