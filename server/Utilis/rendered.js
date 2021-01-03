import { createBody } from "./DOM/Body/body";
import {createHeader} from "./DOM/Header/Header"

const { renderToString } = require("../../jsx-render/Server/renderToString")


export const renderer = (component) => {
    const markup = renderToString(
        component
    )
    const header = createHeader();
    const body  = createBody(markup);
    

    return `
<!DOCTYPE html>
<html lang="en">
  ${header}
  ${body}
</html>
`
}