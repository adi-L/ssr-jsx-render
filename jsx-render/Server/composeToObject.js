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
    this.children = children;
}
export function createServerElement(tag, attrs, children) {
    const el = new ServerElement(tag, children);
    el.setAttrs(attrs);
    return el
}
ServerElement.prototype.setAttrs = function (attrs = {}) {
    
    for (const attr in attrs) {
        if (Object.hasOwnProperty.call(attrs, attr)) {
            const value = attrs[attr];
            const _attr = attr.toLowerCase();
            if (_attr === 'classname') {
                this.className = value;
                delete attrs[attr];
            }if(_attr === "children") {
                delete attrs[attr]; 
            }
            if(isEvent(attr)){
                delete attrs[attr];
            }
        }
    }
    this.attrs = attrs;
};
