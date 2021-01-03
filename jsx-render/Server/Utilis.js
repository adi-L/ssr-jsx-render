const { ServerElement } = require("./serverElement");

export function createServerElement(tagName) {
    return new ServerElement(tagName)
  }
  export function createServerFragNode(frag){
    //TODO: string only
    return frag;
  }