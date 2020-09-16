function inventory(input) {
    const heroes = [];
   
    for (let line of input) {
        let arrayOfHeroes = line.split(" / ");
        heroes.push({
            hero: arrayOfHeroes[0],
            level: arrayOfHeroes[1],
            items: arrayOfHeroes[2]
        });
    }

    heroes.sort((obj1, obj2) => obj1.level - obj2.level);

    for (let hero of heroes) {
        let row = (hero.items).split(", ");
        let sortedByAlphabet = row.sort().join(", ");
        hero.items = sortedByAlphabet;

        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    }   
}

inventory([
    'Isacc / 25 / GravityGun, Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])