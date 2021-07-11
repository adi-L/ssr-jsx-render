


export class Block {
    constructor(props) {
        const state = {
            id: props.id,
            element: null,
            style: props.style,
            className: props.className
        }
        this.state = state;
        this.Component = this.Component.bind(this);
    }
    Component({ children }) {
        const props = {
            id: this.state.id,
            style: this.state.style,
            className: this.state.className
        }
        return  <div {...props}>{children}</div>
    }
    setStyle() {

    }
    addClass() {

    }
    removeClass() {

    }

}