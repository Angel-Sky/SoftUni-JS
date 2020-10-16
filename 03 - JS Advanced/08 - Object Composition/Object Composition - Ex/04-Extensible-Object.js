function solve() {
    const prototype = {};
    const obj = Object.create(prototype);

    obj.extend = function(temp) {
        for (let property in temp) {
            if (typeof temp[property] == 'function') {
                prototype[property] = temp[property];
            } else {
                obj[property] = temp[property];
            }
        }
    }

    return obj;
}