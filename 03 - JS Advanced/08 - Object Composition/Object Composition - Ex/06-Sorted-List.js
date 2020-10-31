function sort() {
    let list = [];
    const instance = {
        size: 0,
        add,
        remove,
        get
    }

    function add(element) {
        list.push(element);
        list.sort((a, b) => a - b);
        instance.size++;
        return instance;
    }

    function remove(index) {
        validateIndex(index);
        list.splice(index, 1);
        instance.size--;
        return instance;
    }

    function get(index) {
        validateIndex(index);
        return list[index];
    }

    function validateIndex(index) {
        if (index < 0 || index >= list.length) {
            throw new Error("Invalide index")
        }
    }

    return instance;
}


let list = sort();
list.add(5);
console.log(list.get(0))
list.add(3);
console.log(list.get(0))
list.remove(0);
console.log(list.get(0))

console.log(list.size)