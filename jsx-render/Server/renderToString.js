import { isArray } from "./array";
import { styleObjectToString } from "./style";

const singleTag = {
    area: 1,
    base: 1,
    br: 1,
    col: 1,
    embed: 1,
    hr: 1,
    img: 1,
    input: 1,
    link: 1,
    meta: 1,
    param: 1,
    source: 1,
    track: 1,
    wbr: 1,
    command: 1,
    keygen: 1,
    menuitem: 1
}
function renderAttrs(attrs) {
    const collectedAttrs = [];
    for (const key in attrs) {
        if (Object.hasOwnProperty.call(attrs, key)) {
            const value = attrs[key];
            if (typeof value === "object" && key === "style") {
                const results = styleObjectToString(value);
                collectedAttrs.push(`style="${results}"`);
            } else {
                collectedAttrs.push(`${key}="${value}"`);
            }
        }
    }
    return collectedAttrs.join(" ");
}
function collectEelements(jsObject) {
    const collectedElements = [];
    if (!isArray(jsObject)) {
        jsObject = [jsObject];
    }
    for (const iterator of jsObject) {
        if(isArray(iterator)){
            iterator = collectEelements(iterator);
        }
        if (typeof iterator === "string") {
            collectedElements.push(iterator);
        }else
        if (iterator.tag) {
            let rendered;
            const renderedAttrs = renderAttrs(iterator.attrs);
            if (singleTag[iterator.tag]) {
                    rendered = `<${iterator.tag} ${renderedAttrs}/>`;
            } else {
                    rendered = `<${iterator.tag} ${renderAttrs(iterator.attrs)}>
                    ${collectEelements(iterator.children)}
                    </${iterator.tag}>`;     
            }
            collectedElements.push(rendered.replace(" >",">").trim());
        }
    }

    return collectedElements.join("");
}
export function renderToString(jsObject) {
    return collectEelements(jsObject);
}