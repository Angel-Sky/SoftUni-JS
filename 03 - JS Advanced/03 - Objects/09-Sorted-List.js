class List {
    constructor() {
        this._list = [];
        this.size = 0;
    }

    add(element) {
        this._list.push(element);
        this._list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        this._validateIndex(index);
        this._list.splice(index, 1);
        this.size--;
    }

    get(index) {
        this._validateIndex(index);
        return this._list[index];
    }

    _validateIndex(index) {
        if (index < 0 || index >= this._list.length) {
            throw new Error("Invalide index")
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(3);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

