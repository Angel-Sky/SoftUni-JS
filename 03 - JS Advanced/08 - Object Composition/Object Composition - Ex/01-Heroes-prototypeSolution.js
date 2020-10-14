function solve() {
    const fighterProto = {
        fight() {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`);
        }
    }

    const mageProto = {
        cast(spell) {
            this.mana--;
            console.log(`${this.name} cast ${spell}`);
        }
    }

    function fighter(name) {
        const instance = Object.create(fighterProto);
        Object.assign(instance, {
            name,
            health: 100,
            stamina: 100
        });
        return instance;
    }

    function mage(name) {
        const instance = Object.create(mageProto);
        Object.assign(instance, {
            name,
            health: 100,
            mana: 100,
        });
        return instance;
    }

    return {fighter, mage}
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);