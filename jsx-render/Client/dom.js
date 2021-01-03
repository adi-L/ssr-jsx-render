import { isSVG, createFragmentFrom} from './utils'
import {isEvent} from '../common/Utilis';
/**
 * The tag name and create an html together with the attributes
 *
 * @param  {String} tagName name as string, e.g. 'div', 'span', 'svg'
 * @param  {Object} attrs html attributes e.g. data-, width, src
 * @param  {Array} children html nodes from inside de elements
 * @return {HTMLElement|SVGElement} html node with attrs
 */
function createElements(tagName, attrs, children) {
  const element = isSVG(tagName)
    ? document.createElementNS('http://www.w3.org/2000/svg', tagName)
    : document.createElement(tagName)

  // one or multiple will be evaluated to append as string or HTMLElement
  const fragment = createFragmentFrom(children)
  element.appendChild(fragment)

  Object.keys(attrs || {}).forEach(prop => {
    if (prop === 'style') {
      // e.g. origin: <element style={{ prop: value }} />
      Object.assign(element.style, attrs[prop])
    } else if (prop === 'ref' && typeof attrs.ref === 'function') {
      attrs.ref(element, attrs)
    } else if (prop === 'className') {
      element.setAttribute('class', attrs[prop])
    } else if (prop === 'htmlFor') {
      element.setAttribute('for', attrs[prop])
    } else if (prop === 'xlinkHref') {
      element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', attrs[prop])
    } else if (prop === 'dangerouslySetInnerHTML') {
      // eslint-disable-next-line no-underscore-dangle
      element.innerHTML = attrs[prop].__html
    } else if (isEvent(prop)) {
      const event = prop.replace(/^on/, '').toLowerCase()
      element.addEventListener(event, attrs[prop])
    } else {
      // any other prop will be set as attribute
      element.setAttribute(prop, attrs[prop])
    }
  })

  return element
}

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
function composeToFunction(JSXTag, elementProps, children) {
  
  const props = Object.assign({}, JSXTag.defaultProps || {}, elementProps, { children:children });
  const bridge = JSXTag.prototype.render ? new JSXTag(props).render : JSXTag;
  const result = bridge(props)
  
  return result

}

function dom(element, attrs, ...children) {
 
  // Custom Components will be functions
  if (typeof element === 'function') {
    // e.g. const CustomTag = ({ w }) => <span width={w} />
    // will be used
    // e.g. <CustomTag w={1} />
    // becomes: CustomTag({ w: 1})
    return composeToFunction(element, attrs, children)
  }

  // regular html components will be strings to create the elements
  // this is handled by the babel plugins
  if (typeof element === 'string') {
    return createElements(element, attrs, children)
  }

   console.error(`jsx-render does not handle ${typeof tag}`)
  

}

export default dom
export const Fragment = () => 'FRAGMENT'
