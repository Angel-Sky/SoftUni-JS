function heroicInventory (arr) {
    return JSON.stringify(arr.reduce((acc, heroes) => {
        let [name, level, items] = heroes.split(" / ");
        acc.push({name, level: Number(level), items: items.split(", ")});
        return acc;
    }, []))
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))