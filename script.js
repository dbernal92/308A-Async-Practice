// Async Programming Practice

// The Bat-Signal Delay
// The Bat-Signal has been activated, but Batman is in the middle of analyzing crime reports. The Batcomputer must alert him as soon as possible, but without interrupting his current task.

function analyzeReports() {
    console.log("Batman is anazlying crime reports for cases.")
}

function alertBatSignal(){
    setTimeout (() => {
        console.log("Bat-Signal has been activated: Batman is needed immaediately!")
    }, 3000);
}

analyzeReports();
alertBatSignal();
console.log("Batman's evening continues...");