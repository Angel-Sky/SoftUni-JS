function solve(tasks, threads, taskToKill) {
    let arrOfTasks = tasks.split(", ").map(Number)
    let arrOfThreads = threads.split(" ").map(Number);

    let firstThread = arrOfThreads[0];
    let lastTask = arrOfTasks[arrOfTasks.length - 1];
    let tempLastTask = arrOfTasks[arrOfTasks.length - 1]
    while (tempLastTask !== taskToKill) {
        if (firstThread >= lastTask) {
            arrOfThreads.shift();
            arrOfTasks.pop();
        } else {
            arrOfThreads.shift();
        }
        tempLastTask = arrOfTasks[arrOfTasks.length - 1]
    }

    console.log(`Thread with value ${firstThread} killed task ${taskToKill}`)
}

solve('20, 23, 54, 34, 90',
    "150 64 20 34",
    54)