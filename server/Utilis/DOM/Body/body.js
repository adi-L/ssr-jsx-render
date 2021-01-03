import { renderToString } from "../../../../jsx-render/Server/renderToString"


export const createBody = (markup) => {
    const scripts = ["https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
        "http://localhost:9000/index.bundle.js"]
    const body = <body>
        <div id="app">
            {markup}
        </div>
        {
            scripts.map((s) => {
                return <script type="text/javascript" src={s}></script>
            })
        }
    </body>;
    
    var a = renderToString(body);
    return a;
}