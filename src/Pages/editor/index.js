import { Block } from "./blocks"
// const css = require("./style.css").toString();
// import css from './style.css';
const fromServer = {
    page: {
        blocks: [
            {
                id: 0,
                style: {
                       
                },
                className: "_jsx-block"
            }
        ]
    }
}
const rendered = {
    blocks: []
}
export const Editor = () => {

    return <div test={1}>
    <div data={0}>
        <div data={1}> 

        </div>
        <div data={2}> 
        <div data={4}> 
hello
</div>
<div data={5}> 
word
        </div>
        </div>
    </div>

    </div>
}