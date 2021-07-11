import hydrate from "./jsx-render/Client/hydrate";
import { routes } from "./server/Utilis/Router/Router";
import App from "./src/App";





// TODO: move to the router managment
const path = window.location.pathname;
const Route = routes.find(r=>r.path === path);
let comp = <App/>;
hydrate(comp,document.getElementById("root"));


