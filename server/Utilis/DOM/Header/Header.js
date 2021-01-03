import { renderToString } from "../../../../jsx-render/Server/renderToString"


export const createHeader = () => {
    const header =  <head>
        <title>
            Jsx SSR
        </title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    </head>
    return renderToString(header);
}