 import { createStore } from "./Common/State/State";
import { routes } from "./server/Utilis/Router/Router";
import App from "./src/App";





// TODO: move to the router managment
const path = window.location.pathname;
const Route = routes.find(r=>r.path === path);
let comp = <App/>;
if(Route){
    comp  = <Route.component/>;
}

if(window.__intailState) {
    createStore(window.__intailState);
}


