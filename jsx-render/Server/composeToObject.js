import { isEvent } from "../common/Utilis";

/**
 * The JSXTag will be unwrapped returning the html
 *
 * @param  {Function} JSXTag name as string, e.g. 'div', 'span', 'svg'
 * @param  {Object} elementProps custom jsx attributes e.g. fn, strings
 * @param  {Array} children html nodes from inside de elements
 *
 * @return {Function} returns de 'dom' (fn) executed, leaving the HTMLElement
 *
 * JSXTag:  function Comp(props) {
 *   return dom("span", null, props.num);
 * }
 */
export function ServerElement(tag, children) {
    this.tag = tag;
    this.attrs = {};
    this.children = children;
}
export function createServerElement(tag, attrs, children) {
    const el = new ServerElement(tag, children);
    el.setAttrs(attrs);
    return el
}
ServerElement.prototype.appendChild = function (child) {
    this.children.push(child);
}
ServerElement.prototype.prepend = function (child) {
    this.children.unshift(child);
}
ServerElement.prototype.setAttribute = function (key, value) {
    this.attrs[key] = value;
}
ServerElement.prototype.getAttribute = function (key) {
    return this.attrs[key];
}
ServerElement.prototype.remove = function () {
    this.tag = null;
    this.children = [];

}
ServerElement.prototype.setAttrs = function (attrs = {}) {

    for (const attr in attrs) {
        if (Object.hasOwnProperty.call(attrs, attr)) {
            const value = attrs[attr];
            let _attr = attr.toLowerCase();

            if (_attr === "children") {
                delete attrs[attr];
            }
            else if (isEvent(attr)) {
                delete attrs[attr];
            } 
        }
    }
    this.attrs = attrs;
};
