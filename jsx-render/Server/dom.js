import { createServerElement,ServerElement } from './composeToObject';

/**
 * The tag name and create an html together with the attributes
 *
 * @param  {String} tagName name as string, e.g. 'div', 'span', 'svg'
 * @param  {Object} attrs html attributes e.g. data-, width, src
 * @param  {Array} children html nodes from inside de elements
 * @return {HTMLElement|SVGElement} html node with attrs
 */

function dom(element, attrs, ...children ) {  
  if(!attrs) attrs = {};
  if (typeof element === 'function') {
    const props = Object.assign(attrs,{children:children || [] });
    element = element(props);

  }
  if(element instanceof ServerElement){     
    return element;
  }
    const serverElement = createServerElement(element, attrs, children);
    return serverElement;
}

export default dom
