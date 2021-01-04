import { notFound } from "../../../src/Pages/NotFound/NotFound";

const { default: App } = require("../../../src/App");

export const routes = [
    {
        component: App,
        path: "/",

    },
    {
        component: notFound,
        path: "/notfound",
        preLoad: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ text: "not found!" })
                }, 50);
            })
        }
    }
]