var walkDOM = function (node1,node2,func) {
    func(node1,node2);                     //What does this do?
    node1 = node1.firstChild;
    node2 = node2.firstChild;
    while(node1 && node2) {
        walkDOM(node1,node2,func);
        node1 = node1.nextSibling;
        node2 = node2.nextSibling;
    }
};  


const hydrate = (component,parent) =>{
    walkDOM(component,parent.firstElementChild,(node1,node2)=>{
        console.log("node1",node1);
        console.log("node2",node2);
        // node2.parentNode.replaceChild(node1, node2);

    });
}

export default hydrate;