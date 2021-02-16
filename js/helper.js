/**
 * @returns {HTMLElement}
 * @param {String} tagName 
 * @param {*Object} attribute 
 * @param {HTMLElement | String | Array} content 
 */

function createElement(tagName, attribute, content) {

    var el = document.createElement(tagName)

    for (var key in attribute) {
        el.setAttribute(key, attribute[key])
    }

    if (typeof content !== 'undefined') {
        el.appendChild(content)
    } else {
        el.innerText = content
    }

    return el;
}