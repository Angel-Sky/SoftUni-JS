/**
  * e.g. genEl("div", [genEl("p", ["Im awesome"], {className: "awesome"}])) -> Ще създаде div, в който има елемент P с текст Im awesome. Div-a ще има клас awesome
 * @param {string} tag Tag name of DOM element
 * @param {array} content Can be [array] or string
 * @param {object} attributes {Object property, e.g. className: silver}
 */

export default function genEl(tag, content, attributes){
    const element = document.createElement(tag);
    if (attributes) {
        Object.assign(element, attributes);
    }
    if (Array.isArray(content)) {
        content.forEach(appendEl)
    } else {
        appendEl(content);
    }
    function appendEl(node) {
        if (typeof node == 'string' || typeof node == "number") {
            node = document.createTextNode(node);
        }
        element.appendChild(node);
    }
    return element;
}



