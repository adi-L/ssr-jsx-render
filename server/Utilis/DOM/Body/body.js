import { renderToString } from "../../../../jsx-render/Server/renderToString"


export const createBody = (markup) => {
    const id = "app";
    const scripts = ["https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
        "http://localhost:3001/index.bundle.js"]
    const body = <body>
        <div id={id}>
            {markup}
        </div>
        {
            scripts.map((s) => {
                return <script type="text/javascript" src={s}></script>
            })
        }
    </body>;

    return renderToString(body);
}