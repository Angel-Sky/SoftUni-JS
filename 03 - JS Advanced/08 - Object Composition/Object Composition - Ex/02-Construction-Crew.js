function solve(worker) {
     if (worker.dizziness == true) {
         let newLevelOfHyd = worker.weight * 0.1 * worker.experience;
         worker.levelOfHydrated += newLevelOfHyd;
         worker.dizziness = false;
     }

    return worker;
}

console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
  ))